import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgError from "../assets/images/backgrounds/bg_error.webp";
import thinkSprite from "../assets/images/sprites/think_sprite.webp";

type ErrorProps = {
  error: string;
  retry: () => void;
}

const ErrorDisplay = ({ error, retry }: ErrorProps) => {
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
      retry();
      setWaiting(false);

      if (intervalRef.current) clearInterval(intervalRef.current);
    }, 3000);
  }

  const buttonStyles = "cursor-pointer p-2 border-2 rounded-md border-emerald-600 font-semibold text-emerald-700 transition-colors duration-200 ease hover:not-disabled:bg-emerald-700 hover:not-disabled:text-amber-100 disabled:opacity-40 disabled:cursor-default outline-none focus-visible:ring-3 focus-visible:ring-[#7FBF3F] focus-visible:ring-offset-2 focus-visible:ring-offset-transparant";

  return (
    <div className="flex-1 flex justify-center items-center">
      <section className="w-[90%] max-w-125 bg-amber-100 rounded-md">
        <div
          className="relative aspect-video bg-size-[100%_100%] bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgError}), linear-gradient(to bottom, #ff000055, #ff0000)` }}
        >
          <div 
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-no-repeat animate-emote"
            style={{
              height: "auto",
              width: "26%",
              aspectRatio: "302 / 706",
              backgroundImage: `url(${thinkSprite})`,
              backgroundSize: "200% 100%",
            }}
          >
          </div>
        </div>
        <div className="pt-3 space-y-3 text-center">
          <h2 className="text-balance font-semibold text-red-700 leading-none">{message}</h2>
          {waiting && <p className="font-semibold text-emerald-800">Retrying in {countDown}...</p>}
          <button
            onClick={() => navigate("/")}
            className={`mr-3 ${buttonStyles}`}
          >
            Home
          </button>
          <button
            onClick={handleRetry}
            disabled={waiting || retries === 3}
            className={`${buttonStyles}`}
          >
            Try again
          </button>
        </div>
      </section>
    </div>
  );
};

export default ErrorDisplay;