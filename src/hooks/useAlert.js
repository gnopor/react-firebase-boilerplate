export default function useAlert() {
  // ==> show loading
  const showLoading = () => {
    hideLoading();
    const loading = document.createElement("div");
    loading.id = "custom_loading";
    document.body.appendChild(loading);
  };

  // ==> hide loading
  const hideLoading = () => {
    const loading = document.querySelector("#custom_loading");
    loading && loading.remove();
  };

  // ==> show notification
  const showNotification = ({ message, error }) => {
    closeNotification();

    const notification = document.createElement("div");
    notification.innerHTML = `    
      <div id="custom_notification" style="
        background: ${error ? "indianred" : "mediumseagreen"};  
        ">
      <div
        style="
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin: 5px 0;
        "
      >
        <span> ${error ? "Error" : "Message"}</span>
        <span id="close_notification" style="cursor: pointer; margin: 0 10px">
          x
        </span>
      </div>

      <p>${message}</p>
    </div>`;

    document.body.appendChild(notification);

    const intervale = setInterval(() => {
      const button = document.querySelector("#close_notification");

      if (!!button) {
        button.addEventListener("click", () => {
          closeNotification();
        });
        clearInterval(intervale);
      }
    }, 100);
  };

  // ==> hide notification
  const closeNotification = () => {
    const notification = document.querySelector("#custom_notification");
    notification && notification.remove();
  };

  // ==> show message

  // ==> hide message

  return {
    loading: { show: showLoading, hide: hideLoading },
    notify: { show: showNotification, hide: closeNotification },
  };
}
