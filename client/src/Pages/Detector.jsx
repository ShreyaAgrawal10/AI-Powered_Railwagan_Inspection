import FileUploder from "../Components/FileUploder";
import Header from "../Components/Header";
function Detector() {
  return (
    <div className="bg-gradient-to-t from-[#00c6fb] to-[#005bea] h-[100vh] flex flex-col justify-between pb-30">
    <Header />
    <div className="flex flex-col gap-4 justify-center items-center align-middle ">
      <h1 className="text-3xl font-bold mb-4 text-white bf">
      Upload your video file
      </h1>
      <FileUploder />
    </div>
    </div>
  );
}

export default Detector;
