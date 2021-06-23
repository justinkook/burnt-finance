import React from "react";
import "./CreateNftModal.scss";

function CreateNftModal(props: {
  overlayMask: any;
  title: any;
  closeIcon: any;
  subtitle: any;
  body: any;
  buttonText: any;
}) {
  const { overlayMask, title, closeIcon, subtitle, body, buttonText } = props;

  return (
    <div className="container-center-horizontal">
      <div className="next-steps-modal screen">
        <div className="overlap-group-1">
          <div className="next-steps-modal-1">
            <div
              className="overlap-group1-2"
              style={{ backgroundImage: `url(${overlayMask})` }}
            >
              <div className="flex-row">
                <div className="next-steps valign-text-middle mulish-bold-black-32px">
                  {title}
                </div>
                <div
                  className="close-icon"
                  style={{ backgroundImage: `url(${closeIcon})` }}
                ></div>
              </div>
              <p className="text-3 mulish-bold-black-14px">{subtitle}</p>
              <img className="call-contract-method" src={body} />
              <div className="wallet-instructions-button">
                <div className="overlap-group2">
                  <div className="text-4 mulish-extra-bold-white-16px">
                    {buttonText}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNftModal;
