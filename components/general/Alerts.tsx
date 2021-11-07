import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { alertService, AlertType } from "../../Services/alertService";

export { Alert };

Alert.propTypes = {
  id: PropTypes.string,
  fade: PropTypes.bool,
};


Alert.defaultProps = {
  id: "default-alert",
  fade: true,
};

function Alert({ id, fade }) {
  const router = useRouter();

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // subscribe to new alert notifications
    const subscription = alertService.onAlert(id).subscribe((alert) => {
      // clear alerts when an empty alert is received

      if (!alert.message) {
        setAlerts((alerts) => {
          // filter out alerts without 'keepAfterRouteChange' flag
          const filteredAlerts = alerts.filter((x) => x.keepAfterRouteChange);

          // set 'keepAfterRouteChange' flag to false on the rest
          filteredAlerts.forEach((x) => delete x.keepAfterRouteChange);
          return filteredAlerts;
        });
      } else {
        // add alert to array
        setAlerts((alerts) => [...alerts, alert]);

        // auto close alert if required
        if (alert.autoClose) {
          setTimeout(() => removeAlert(alert), 3000);
        }
      }
    });

    // clear alerts on location change
    const clearAlerts = () => {
      setTimeout(() => alertService.clear(id));
    };
    router.events.on("routeChangeStart", clearAlerts);

    // clean up function that runs when the component unmounts
    return () => {
      // unsubscribe to avoid memory leaks
      subscription.unsubscribe();
      router.events.off("routeChangeStart", clearAlerts);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function removeAlert(alert: any) {
    if (fade) {
      // fade out alert
      const alertWithFade = { ...alert, fade: true };
      setAlerts((alerts) =>
        alerts.map((x) => (x === alert ? alertWithFade : x))
      );

      // remove alert after faded out
      setTimeout(() => {
        setAlerts((alerts) => alerts.filter((x) => x !== alertWithFade));
      }, 250);
    } else {
      // remove alert
      setAlerts((alerts) => alerts.filter((x) => x !== alert));
    }
  }

  function cssClasses(alert: any) {
    if (!alert) return;

    const classes = ["alert", "alert-dismissable"];

    const alertTypeClass = {
      [AlertType.Success]: "bg-green-500 text-white text-center p-2",
      [AlertType.Error]: "bg-red-500 text-white text-center p-2",
      [AlertType.Info]: "bg-gray-500",
      [AlertType.Warning]: "bg-yellow-500",
    };

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push("fade");
    }

    return classes.join(" ");
  }

  if (!alerts.length) return null;

  return (
    <div className="w-full absolute z-10 bottom-0">
      <div className="">
        {alerts.map((alert, index) => (
          <div key={index} className={cssClasses(alert)}>
            <a className="close float-right" onClick={() => removeAlert(alert)}>
              &times;
            </a>
            <span dangerouslySetInnerHTML={{ __html: alert.message }}></span>
          </div>
        ))}
      </div>
    </div>
  );
}
