import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.894883392953!2d-4.041452026104511!3d5.432934034877204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc19535f8c97f03%3A0xc54fcc4d5cc28b7!2sAbobo%20n%20dotr%C3%A9!5e0!3m2!1sfr!2sci!4v1683048353599!5m2!1sfr!2sci"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
