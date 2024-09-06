import { useEffect, useState } from "react";

interface FacuetCountProps {
  faucetWaitTime: any;
  validClaim: any;
}

const FaucetCount = ({ faucetWaitTime, validClaim }: FacuetCountProps) => {
  const count = faucetWaitTime.split(" ");

  const [hour, setHour] = useState<any>(Number(count[0].split("H")[0]));
  const [minute, setMinute] = useState<any>(Number(count[1].split("M")[0]));

  function countFunc() {
    // inlizlizing count down
    console.log("inizilizeing count");

    if (hour >= 1) {
      setMinute((prev: any) => {
        if (prev === 0) {
          return 60;
        } else {
          return prev - 1;
        }
      });
    } else {
      setMinute((prev: any) => {
        if (prev === 0) {
          if (hour === 0) {
            return 0;
          } else {
            return prev - 1;
          }
        } else {
          return prev - 1;
        }
      });
      return null;
    }

    if (minute >= 1) {
      setHour((prev: any) => {
        if (prev === 0) {
          if (minute > 0) {
            // give remainder
            setMinute((prev: any) => {
              if (prev + 59 > 60) {
                return prev + 59 - 60;
              }
            });
            // set reminder
            return prev + 1;
          }

          return 0;
        } else {
          return prev - 1;
        }
      });
    } else {
      return null;
    }

    if (hour === 0 && minute === 0) {
      validClaim(false);
      return null;
    }
  }

  useEffect(() => {
    const intervaleTimeset = setInterval(countFunc, 60000);
    return () => clearInterval(intervaleTimeset);
  }, [hour, minute]);

  return (
    <li className="w-[100px]">
      <p className="flex items-center justify-between">
        <span>
          hours: <span>{hour}</span>
        </span>
      </p>
      <p className="flex items-center justify-between">
        <span>
          minute: <span>{minute}</span>
        </span>
      </p>
    </li>
  );
};

export default FaucetCount;
