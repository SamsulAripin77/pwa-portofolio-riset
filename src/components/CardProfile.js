import React from "react";

function CardProfile(props) {
  return (
    <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
      <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full"alt="card-profile" />
      <div className="flex justify-center -mt-8">
        <img
          src={props.img}
          alt="card-profile"
          className="rounded-full border-solid border-white border-2 -mt-3 w-20"
        />
      </div>
      <div className="text-center px-3 pb-6 pt-2">
        <h3 className="text-black text-sm font-bold font-sans">{props.name}</h3>
        <p className="mt-2 font-sans font-light text-grey-dark">
            {props.jurusan}
        </p>
      </div>
      <div className="flex justify-center pb-3 text-grey-dark">
        <div className="text-center mr-3 border-r pr-3">
          <h2>34</h2>
          <span>Karya</span>
        </div>
        <div className="text-center">
          <h2>42</h2>
          <span>Publikasi</span>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
