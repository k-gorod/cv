import {useState, useEffect} from 'react'
interface WindowSize{
    width: number,
    height: number
  }
  function useWindowSize (): WindowSize {
    const [windowSize,setWindowSize] = useState({
      width: 0,
      height: 0
    })
    useEffect(()=>{
      function resizeWindow(): void{
        setWindowSize({
          width : window.innerWidth,
          height :window.innerHeight
        })
      }
      window.addEventListener('resize',resizeWindow);
      resizeWindow();
      return ()=>{window.removeEventListener('resize',resizeWindow)}
    },[])
    return windowSize
  }
  
  
  export type {WindowSize}
  export default useWindowSize;