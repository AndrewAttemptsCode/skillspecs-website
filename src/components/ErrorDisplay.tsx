import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bgError from "../assets/images/backgrounds/bg_error.webp";

type ErrorProps = {
  error: string;
}

const ErrorDisplay = ({ error }: ErrorProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [retries, setRetries] = useState(0);
  const [waiting, setWaiting] = useState(false);
  const [countDown, setCountDown] = useState(3);

  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const showFinalMessage = retries === 3 && !waiting;
  const message = showFinalMessage ? "Man! ...Please let me know it is broken." : error;

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, []);

  const handleRetry = () => {
    if (retries >= 3) return;

    setWaiting(true);
    setRetries((prev) => prev + 1);
    setCountDown(3);

    intervalRef.current = setInterval(() => {
      setCountDown((prev) => (prev > 0 ? prev - 1 : 0)); 
    }, 1000);

    timeoutRef.current = setTimeout(() => {
      navigate(location.pathname);
      setWaiting(false);

      if (intervalRef.current) clearInterval(intervalRef.current);
    }, 3000);
  }

  return (
    <div className="flex-1 flex justify-center items-center">
      <section className="w-[90%] max-w-125 bg-amber-100">
        <div
          className="aspect-video bg-size-[100%_100%] bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgError}), linear-gradient(to bottom, #ff000055, red)` }}
        />
        <h2>{message}</h2>
        {waiting && <p>Retrying in {countDown}...</p>}
        <button onClick={handleRetry} disabled={waiting || retries === 3}>Try again</button>
      </section>
    </div>
  );
};

export default ErrorDisplay;