import {useEffect, useRef} from "react";

export const useObserver = (ref, callback) => {
  const observer = useRef()
  useEffect(() => {
    let cb = function (entries, observer){
      if (entries[0].isIntersecting){
        callback()
      }
    }
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current)
  }, [])
}
