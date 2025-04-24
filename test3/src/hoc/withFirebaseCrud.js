import { useState, useEffect } from "react";
import {
  ref,
  onValue,
  set,
  remove,
  push,
  update
} from "firebase/database";
import db from "../firebase/config";

const withFirebaseCrud = (WrappedComponent, node) => {
  return function () {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const nodeRef = ref(db, node);

    useEffect(() => {
      onValue(nodeRef, (snapshot) => {
        setData(snapshot.val() || {});
        setLoading(false);
      }, (err) => {
        setError(err);
        setLoading(false);
      });
    }, []);

    const create = (newData) => {
      const newRef = push(nodeRef);
      set(newRef, newData);
    };

    const updateItem = (id, updatedData) => {
      update(ref(db, `${node}/${id}`), updatedData);
    };

    const removeItem = (id) => {
      remove(ref(db, `${node}/${id}`));
    };

    return (
      <WrappedComponent
        data={data}
        loading={loading}
        error={error}
        create={create}
        updateItem={updateItem}
        removeItem={removeItem}
      />
    );
  };
};

export default withFirebaseCrud;
