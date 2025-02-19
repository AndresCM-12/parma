import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  FirestoreError,
  Timestamp,
  collection,
  doc,
  getFirestore,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { app } from "../../firebase/config";
import { OrbitProgress } from "react-loading-indicators";
import {
  ChevronDown,
  ChevronUp,
  Edit2Icon,
  Eye,
  EyeClosed,
  MessageSquareMore,
  Trash2,
  X,
} from "lucide-react";
import { set } from "firebase/database";

export default function AdminReviews() {
  const [status, setStatus] = useState("initial");
  const [products, setProducts] = useState([] as any);

  const [snapshot, loading, error] = useCollection(
    query(collection(getFirestore(app), "reviews"))
  );

  useEffect(() => {
    if (loading) {
      setStatus("loading");
      return;
    }

    if (error) {
      setStatus("error");
      return;
    }

    if (status === "loading" && snapshot != undefined) {
      snapshot.docs.forEach((doc) => {
        setProducts((prev: any) => [...prev, { ...doc.data(), id: doc.id }]);
      });
      setStatus("success");
    }
  }, [snapshot]);

  switch (status) {
    case "initial":
      return <InitialView />;

    case "loading":
      return <LoadingView />;

    case "success":
      return <SuccessView products={products} />;

    default:
      return <ErrorView error={error} />;
  }
}

function InitialView() {
  return (
    <div className={styles.questionsWrapper}>
      <OrbitProgress color="#000000" size="medium" text="" textColor="" />
    </div>
  );
}

function LoadingView() {
  return (
    <div className={styles.questionsWrapper}>
      <OrbitProgress color="#000000" size="medium" text="" textColor="" />
    </div>
  );
}

function SuccessView({ products }: { products: any }) {
  return (
    <div className={styles.questionsWrapper}>
      <div className={styles.successWrapper}>
        {products?.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ErrorView({ error }: { error: FirestoreError | undefined }) {
  return (
    <div className={styles.questionsWrapper}>
      <h1>Ocurrió un error</h1>
      <p>{error?.code}</p>
      <p>{error?.message}</p>
    </div>
  );
}

function ProductItem({ product }: { product: any }) {
  const enchantTitle = (title: string) => {
    return title
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const [expanded, setExpanded] = useState(false);
  const [products, setProducts] = useState({} as { [key: string]: any });

  useEffect(() => {
    const newproducts: { [key: string]: any } = Object.keys(product)
      .filter((key) => key !== "id")
      .reduce((obj: any, key) => {
        obj[key] = product[key];
        return obj;
      }, {});

    setProducts(newproducts);
  }, []);

  return (
    <div className={styles.reviewsWrapper}>
      <div className={styles.mainProductHeader}>
        <h4>{enchantTitle(product.id)}</h4>
        <div
          className={styles.expandButton}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>
      <div
        key={product.id}
        className={styles.reviewsCard}
        style={{
          height: expanded ? "auto" : "0px",
          overflow: expanded ? "visible" : "hidden",
        }}
      >
        <div>
          {Object.keys(products).map((key, index) => {
            return products[key]?.reviews?.length > 0 ? (
              <div key={index}>
                <h5>{enchantTitle(key)}</h5>
                <div className={styles.reviews}>
                  {products[key].reviews.map(
                    (review: any, indexTwo: number) => (
                      <ProductReview
                        key={indexTwo}
                        review={review}
                        products={product}
                        setProducts={setProducts}
                        currentProduct={key}
                        index={indexTwo}
                      />
                    )
                  )}
                </div>
              </div>
            ) : (
              <div key={index} className={styles.emptyReviews}>
                <h5>{enchantTitle(key)}</h5>
                <div className={styles.reviewCard}>
                  <h5>No hay reviews aún</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProductReview({
  review,
  products,
  setProducts,
  currentProduct,
  index,
}: {
  review: any;
  products: any;
  setProducts: any;
  currentProduct: any;
  index: number;
}) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(review.visible);
  const [isDeleted, setIsDeleted] = useState(false);
  const [responseText, setResponseText] = useState(review.reseña);
  const [showEditText, setShowEditText] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const reviewRef = doc(getFirestore(app), "reviews", products.id);
    const updatedDocument = {
      [currentProduct]: {
        reviews: [
          ...products[currentProduct].reviews.slice(0, index),
          {
            ...review,
            reseña: responseText,
          },
        ],
      },
    };

    await updateDoc(reviewRef, updatedDocument);
    setShowEditText(false);
  };

  const handleDelete = async (index: number) => {
    const reviewRef = doc(getFirestore(app), "reviews", products.id);
    const updatedDocument = {
      [currentProduct]: {
        reviews: [
          ...products[currentProduct].reviews.slice(0, index),
          ...products[currentProduct].reviews.slice(index + 1),
        ],
      },
    };

    var productsUpdated = {
      ...products,
      [currentProduct]: {
        reviews: [
          ...products[currentProduct].reviews.slice(0, index),
          ...products[currentProduct].reviews.slice(index + 1),
        ],
      },
    };

    delete productsUpdated.id;

    setProducts(productsUpdated);

    updateDoc(reviewRef, updatedDocument);
  };

  const handleVisibility = async () => {
    setIsAnswerVisible(!isAnswerVisible);

    const reviewRef = doc(getFirestore(app), "reviews", products.id);
    console.log(reviewRef);
    console.log(currentProduct, products.id);
    const updatedDocument = {
      [currentProduct]: {
        reviews: [
          ...products[currentProduct].reviews.slice(0, index),
          {
            ...review,
            visible: !isAnswerVisible,
          },
        ],
      },
    };

    await updateDoc(reviewRef, updatedDocument);
  };

  return (
    <div
      key={index}
      className={styles.reviewCard}
      style={{
        display: isDeleted ? "none" : "flex",
      }}
    >
      <div className={styles.visibilityWrapper}>
        <div
          className={styles.visibilityButton}
          onClick={() => handleVisibility()}
        >
          {isAnswerVisible ? <Eye size={24} /> : <EyeClosed size={24} />}
        </div>
      </div>
      <div className={styles.bodyWrapper}>
        <div className={styles.reviewHeader}>
          <p>{review.nombre}</p> - <p>{review.correo}</p>
        </div>
        {!showEditText ? (
          <div className={styles.reviewBody}>
            <p>{responseText}</p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <input
              type=""
              value={responseText}
              onChange={(event) => {
                setResponseText(event.target.value);
              }}
            />
            <button onClick={handleSubmit}>Guardar</button>
          </div>
        )}
      </div>
      <div className={styles.date}>
        <p>
          {review.fecha.toDate().toLocaleDateString()} -
          {review.fecha.toDate().toLocaleTimeString()}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Trash2
            size={16}
            onClick={() => handleDelete(index)}
            style={{
              cursor: "pointer",
            }}
          />
          <Edit2Icon
            size={16}
            onClick={() => setShowEditText(!showEditText)}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}
