import { useEffect, useState } from 'react';

export const useFetchPosts = (url) => {
  //url => POST_URL from App.js
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      //Здесь мы забираем JSON файл по сети и выводим его содержимое в консоль при помощи response
      .then((response) => response.json())
      .then((postsFromServer) => {
        setBlogPosts(postsFromServer);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [url]);

  return { blogPosts, setBlogPosts, isLoading, error };
};

export const useGetSinglePost = (url, postId) => {
  const [blogPost, setBlogPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(url + postId)
      .then((response) => response.json())
      .then((postFromServer) => {
        setBlogPost(postFromServer);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [url, postId]);

  return { blogPost, setBlogPost, isLoading, error };
};
