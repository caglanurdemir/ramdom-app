import React, { useEffect, useState } from "react";
import { getImages } from "../../api/endpoints/image";
import { useSelector, useDispatch } from "react-redux";
import { updateImage } from "../../redux/actions/Image";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";

export default function MemeGenerator() {
  const dispatch = useDispatch();
  const getRandomImage = useSelector((state) => state.image.updateImage);
  console.log(getRandomImage);

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomIMG, setRandomIMG] = useState("http://i.imgflip.com/1bij.jpg");
  const [memes, setMemes] = useState([]);
  const [lazy, setLazy] = useState(true);

  useEffect(() => {
    getImages()
      .then((res) => {
        if (res.status === 200) {
          setMemes(res.data.data.memes); //lul
          setLazy(false);
        }
      })
      .catch((ex) => {
        //TODO: Exception handling
        console.error(ex);
      });
  }, []);

  useEffect(() => {
    let i = Math.floor(Math.random() * memes.length);
    setRandomIMG(memes[i] && memes[i].url ? memes[i].url : ""); //Mini exception handling
  }, [memes, getRandomImage]);

  return (
    <div>
      <div className="meme-form">
        <button
          onClick={() => {
            dispatch(updateImage());
          }}
        >
          New Image
        </button>
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => {
            setTopText(e.target.value);
          }}
        />

        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => {
            setBottomText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            var now = new Date();
            var fileName =
              now.getDate() +
              "-" +
              (now.getMonth() + 1) +
              "-" +
              now.getFullYear() +
              " -- ";
            fileName +=
              now.getHours() +
              "-" +
              now.getMinutes() +
              "-" +
              now.getSeconds() +
              ".png";
            domtoimage.toPng(document.body).then(function (blob) {
              saveAs(blob, fileName);
            });
          }}
        >
          Save
        </button>
      </div>
      <div id="meme" className="meme">
        <img src={lazy ? null : randomIMG} alt="" />
        <h2 className="top">{topText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
    </div>
  );
}
