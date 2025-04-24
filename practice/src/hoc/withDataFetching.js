import React, { useState, useEffect } from 'react';
import axios from 'axios';

const withDataFetching = (WrappedComponent, dataSource) => {
  return function () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios.get(dataSource)
        .then(response => {
          setData(response.data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }, [dataSource]);

    return <WrappedComponent data={data} loading={loading} error={error} />;
  };
};

export default withDataFetching;
