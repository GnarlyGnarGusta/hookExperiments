import { useCallback, useState, useEffect } from "react";

export const useComponentDidMount = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, [isMounted, setIsMounted]);

  const isMountedCallback = useCallback(
    callback => {
      callback(isMounted);
    },
    [isMounted]
  );

  return isMountedCallback;
};
