import { useEffect, useState } from "react";
import "./App.css";

const yesButton: string[] = ["yes1", "yes2", "yes3", "yes4", "yes5", "yes6"];

const gifs = [
  "https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/Blush%20Bugcat%20Sticker%20by%20Capoo.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL0JsdXNoIEJ1Z2NhdCBTdGlja2VyIGJ5IENhcG9vLmdpZiIsImlhdCI6MTc3MDAyMjY3MCwiZXhwIjoxODAxNTU4NjcwfQ.UrMCgCkLeNAvYaFRneSWhMz2koXoLwxoWwly6eHHt4k",
  "https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/Cat%20What%20Sticker%20by%20Capoo.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL0NhdCBXaGF0IFN0aWNrZXIgYnkgQ2Fwb28uZ2lmIiwiaWF0IjoxNzcwMDIyNzAwLCJleHAiOjE4MDE1NTg3MDB9.nj_qWoTWkZuPAyWxySL9YKlsj0nmDq_fmGoHtoRdMiU",
  "https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/Sad%20Cat%20Sticker%20by%20Capoo%20(1).gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL1NhZCBDYXQgU3RpY2tlciBieSBDYXBvbyAoMSkuZ2lmIiwiaWF0IjoxNzcwMDIyNzM1LCJleHAiOjE4MDE1NTg3MzV9.f3zgBhyPNNqJcmTy-czsW8YatQ-YFUbQgaACn8i_s04",
  "https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/Sad%20Cat%20Sticker%20by%20Capoo.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL1NhZCBDYXQgU3RpY2tlciBieSBDYXBvby5naWYiLCJpYXQiOjE3NzAwMjI3NTEsImV4cCI6MTgwMTU1ODc1MX0.0bleqyMsQjuwfggrIR84EyvbC6_mUQLqyGu3_BEnnCI",
  "https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/Cry%20Bugcat%20Sticker%20by%20Capoo.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL0NyeSBCdWdjYXQgU3RpY2tlciBieSBDYXBvby5naWYiLCJpYXQiOjE3NzAwMjI3MDksImV4cCI6MTgwMTU1ODcwOX0.2WoptpRarvDavO9im4HY6pE4YpowsW930ic5ye4vZhM",
  "https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/Bugcat%20GIF%20by%20Capoo.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL0J1Z2NhdCBHSUYgYnkgQ2Fwb28uZ2lmIiwiaWF0IjoxNzcwMDIyNjg1LCJleHAiOjE4MDE1NTg2ODV9.SliL4wBY3hEPj-BAqrKzK8nk2QbwoDXHI_wH4uKlD8o",
];

const FAAHH_sfx = new Audio(
  "https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/videoplayback.weba?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL3ZpZGVvcGxheWJhY2sud2ViYSIsImlhdCI6MTc3MDAyNDI3NCwiZXhwIjoxODAxNTYwMjc0fQ.KxO-43sNzFOiU4hRIzj8daI7QbrguFimhyxbV-8vwIc",
);

const background_music = new Audio(
  "https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/Nobody%20Gets%20Me%20(SZA%20Cover)%20(from%20Netflix's%20Queen%20Charlotte%20Series).mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL05vYm9keSBHZXRzIE1lIChTWkEgQ292ZXIpIChmcm9tIE5ldGZsaXgncyBRdWVlbiBDaGFybG90dGUgU2VyaWVzKS5tcDMiLCJpYXQiOjE3NzAwMjQ4MDEsImV4cCI6MTgwMTU2MDgwMX0.7iB1W4y3Yle53PzwVAiCvG1UTvjgNfH8JA0Lp-LvVPc",
);

const celebration_music = new Audio(
  "https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/Maroon%205%20-%20Sugar%20(Chorus).mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL01hcm9vbiA1IC0gU3VnYXIgKENob3J1cykubXAzIiwiaWF0IjoxNzcwMDI4MTQwLCJleHAiOjE4MDE1NjQxNDB9.PytGuhFmbJz_U4CCE_EaMdSkLIQRaJrOBSIWWLY-zZg",
);

function App() {
  const [clicked, setClick] = useState(0);
  const [count, setCount] = useState(0);
  const [gif, setGif] = useState("");

  const handleClick = () => {
    setClick(clicked + 1);
    if (clicked < 1) {
      background_music.play();
      background_music.volume = 0.5;
    } else if (clicked == 1) {
      background_music.pause();
      celebration_music.play();
      celebration_music.volume = 0.5;
      celebration_music.loop = true;
    } else if (clicked > 1) {
      celebration_music.volume = 0.3;
    }
  };

  const handleBack = () => {
    setClick(clicked - 1);
  };

  const clickNo = () => {
    if (count + 1 <= 5) {
      setCount(count + 1);
    }

    FAAHH_sfx.currentTime = 0;
    FAAHH_sfx.play();
  };

  useEffect(() => {
    const button = document.getElementById("YesButton");
    if (count <= 5) {
      button?.classList.remove(`${yesButton[count - 1]}`);
      button?.classList.add(`${yesButton[count]}`);
    }

    setGif(gifs[count]);
  }, [count]);

  return (
    <>
      {clicked == 0 && (
        <div
          onClick={handleClick}
          className="w-screen h-screen flex items-center justify-center"
        >
          <img
            src="https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/seal.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL3NlYWwucG5nIiwiaWF0IjoxNzcwMDI1NTgxLCJleHAiOjE4MDE1NjE1ODF9.J2_69zlCkgCoKMO55_Uv5qNFwpYa8zoPgbsyjeAK5HE"
            alt="Seal"
            className="w-32 md:w-48 lg:w-64 h-auto"
          />
        </div>
      )}

      {clicked == 1 && (
        <main className="h-screen justify-items-center place-content-center bg-transparent">
          <img
            src={gif}
            className="w-[30vw] h-[30vw] lg:w-[20vh] lg:h-[20vh]"
            alt="Loading animation"
          />

          <h1 className="text-center font-pacifico text-[8vw] lg:text-[5vh] leading-tight pb-4">
            Will you be my <br />
            <span className="text-[10vw] lg:text-[6vh] font-black text-red-600">
              Valentines?
            </span>
          </h1>

          <div className="flex items-end justify-center gap-3">
            <button
              className="btn bg-red-600 "
              id="YesButton"
              onClick={handleClick}
            >
              Yes
            </button>
            <button
              className="btn bg-gray-500 max-w-xs max-h-12"
              onClick={clickNo}
            >
              No
            </button>
          </div>
        </main>
      )}

      {clicked == 2 && (
        <main className="h-screen justify-items-center place-content-center bg-transparent">
          <img
            src="https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/Cat%20Blush%20Sticker%20by%20Capoo.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL0NhdCBCbHVzaCBTdGlja2VyIGJ5IENhcG9vLmdpZiIsImlhdCI6MTc3MDAyNzM3NiwiZXhwIjoxODAxNTYzMzc2fQ.KQCAtANl5VHv2WxrHscNld7ycJ_OeJKm0Keqohupspg"
            className="w-[30vw] h-[30vw] lg:w-[20vh] lg:h-[20vh]"
            alt="Loading animation"
          />

          <h1 className="text-center font-pacifico text-[10vw] lg:text-[6vh] font-black ">
            YAYYYY 🙈🤭😎
            <br />
            <span
              className="text-base lg:text-[5vh] leading-tight pb-4 font-normal text-red-600"
              onClick={handleClick}
            >
              see more
            </span>
          </h1>
        </main>
      )}
      {clicked == 3 && (
        <main className="min-h-screen flex flex-col items-center gap-4 p-4 overflow-auto">
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/Cat%20Blush%20Sticker%20by%20Capoo.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL0NhdCBCbHVzaCBTdGlja2VyIGJ5IENhcG9vLmdpZiIsImlhdCI6MTc3MDAyNzM3NiwiZXhwIjoxODAxNTYzMzc2fQ.KQCAtANl5VHv2WxrHscNld7ycJ_OeJKm0Keqohupspg"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-[20vh] md:h-[20vh]"
              alt="Loading animation"
            />

            <h1 className="text-center font-pacifico text-[5vw] sm:text-[6vw] md:text-[5vh] leading-tight pb-2">
              wa u thinkkk 👀 <br />
              <span className="text-xs sm:text-sm md:text-base">
                ur idea would help a lottt hihi (just let me know 😁)
              </span>
              <span
                className="text-xs sm:text-sm md:text-base"
                onClick={handleBack}
              >
                {" "}
                back here
              </span>
            </h1>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-3xl">
            {/* Card 1 */}
            <div className="flex flex-row items-stretch bg-white/70 shadow-lg rounded-xl p-3 gap-3">
              <img
                src="https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/one%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL29uZSAoMSkucG5nIiwiaWF0IjoxNzcwMDI5NTEwLCJleHAiOjE4MDE1NjU1MTB9.3dDfgsDTNX5RiGN6zIqqo7RfrOg0rMZ2yWznf5O7vvo"
                alt="DIY Cake Baking"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-48 md:h-48 object-cover rounded-lg shrink-0"
              />
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold font-pacifico text-red-600">
                  DIY Cake Baking
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 ">
                  Place: SM Megamall, IDIM DIY Bakery <br />
                  What: We bake our own cakee 😁
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-row-reverse items-stretch bg-white/70 shadow-lg rounded-xl p-3 gap-3">
              <img
                src="https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/one%20(2).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL29uZSAoMikucG5nIiwiaWF0IjoxNzcwMDI5MTI4LCJleHAiOjE4MDE1NjUxMjh9.INLUcurVwHtBiV1B9LbIwaDkCJa09TfFrTYFfxHwRvs"
                alt="Amusement Park"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-48 md:h-48 object-cover rounded-lg shrink-0"
              />
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold font-pacifico text-red-600">
                  Amusement Park
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 ">
                  Place: Star City yayy <br />
                  What: Actually nainggit lang ako kina Gi AHSDHAHSDA buttt
                  lowkey tho this sounds funnn 👀😁
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-row items-stretch bg-white/70 shadow-lg rounded-xl p-3 gap-3">
              <img
                src="https://itchsrkvqmxnzzvhscos.supabase.co/storage/v1/object/sign/Valentines/one%20(3).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNmJiNGFlMS02Mjg3LTRlNjQtYjI3Ni1hOWRjNDIyNGY4NjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJWYWxlbnRpbmVzL29uZSAoMykucG5nIiwiaWF0IjoxNzcwMDI5MjUxLCJleHAiOjE4MDE1NjUyNTF9.KYo6fpzjIdzjp_iW-W9-H7FMtoBnm6ob1CIRHU1HM3g"
                alt="Trampoline Park"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-48 md:h-48 object-cover rounded-lg shrink-0"
              />
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold font-pacifico text-red-600">
                  Trampoline Park
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 ">
                  Where: Festival Alabang, WiiJUMP Trampoline Park, indoor
                  playground <br />
                  What: MAY NINJA COURSE SILAAA hehe, tas falling net, and other
                  fun thingyy
                </p>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default App;
