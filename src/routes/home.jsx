import { useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

function Home()
{

    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUp, setImage] = useState(null);
    const [respo, setRespo] = useState(null);



    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setImage(URL.createObjectURL(event.target.files[0]))
    }
  

    const handleSubmit = () => {
        
        console.log(selectedFile.name);
        const reader = new FileReader()

    reader.readAsDataURL(selectedFile)

    reader.onload = () => {
      console.log('called: ', reader)
      handleSubmittwo(reader)
    //   const reqData = { name: 'React POST Request Example' };
    //   axios.post('https://reqres.in/invalid-url', reqData)
    //       .then(response => this.setState({ articleId: response.data.id }))
    //       .catch(error => {
    //           this.setState({ errorMessage: error.message });
    //           console.error('There was an error!', error);
    //       });
    //   setBase64IMG(reader.result)
    }
    }
    const handleSubmittwo = (reader) => {
        console.log(reader);

             const reqData = { filename: selectedFile.name,data:reader.result };
      axios.post('https://reqres.in/invalid-url', reqData)
          .then(response =>setRespo(response) )
          .catch(error => {
              console.error('There was an error!', error);
          });
    }  
     const apiReq = (reader) => {
      const  Response=
        {
            "id": "123",
            "filename": "example.jpg",
            "url": "https://example.com/images/123",
            "answer": "Answer",
            "width": 800,
            "height":600
        }
        setTimeout(() => { setRespo(Response) }, 2000);
        
    }


    



    return (

        <div className="main-body-section">
            <div className="flex body-cotainer p-6 h-screen justify-center items-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400">
                <div className="body-content-container m-10 justify-center">
                    <div className="form-body p-10 mx-auto relative">
                        <div className="bg-white/30 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[80vw] h-[700px] flex flex-col justify-center overflow-clip relative backdrop:blur-2xl text-center border items-center">
                            <h2 className="font-bold italic text-3xl text-gray-700 top-8 absolute mx-auto">ImageMathic</h2>

                            <h3 className="text-indigo-600 mt-5 text-xl font-semibold top-14 absolute mx-auto "> Handwritten Equation Detector</h3>

                            <Link to="/userguide" className='absolute text-purple-600 top-2 right-2' ><FontAwesomeIcon icon={faCircleInfo} /> User Guide </Link>
                            <div className="form-section mt-5">
                                <div className="flex flex-col items-center justify-center ">
                                    <label htmlFor="file-input" className="block text-gray-700 font-bold mb-2">
                                        Insert the image
                                    </label>
                                    <div className="relative">
                                        <input 
                                        type="file" 
                                        id="file-input" 
                                        className="absolute opacity-0 "
                                        onChange={handleFileInputChange} 
                                        />
                                        <button className="bg-gray-400 text-white font-semibold py-2 px-4 rounded cursor-pointer shadow-md">
                                        Choose File 
                                        </button>
                                        <span className="ml-3">{selectedFile ? selectedFile.name : 'No file chosen'}</span>
                                    </div>
                                    <button 
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 cursor-pointer"
                                        onClick={apiReq}
                                    >
                                        Predict 
                                    </button>
                                </div>
                            </div>

                            <hr className='mt-10 mb-10'/>
                            
                            

                            <div className="form-section">
                                <div className="flex flex-row items-center justify-space-around  ">
                                    <div>
                                    <label htmlFor="file-input" className="block text-gray-700 font-bold mb-2">
                                       ID:{respo?.id}
                                    </label>
                                    <label htmlFor="file-input" className="block text-gray-700 font-bold mb-2">
                                       FileName:{respo?.filename}
                                    </label> <label htmlFor="file-input" className="block text-gray-700 font-bold mb-2">
                                       Answer:{respo?.answer}
                                    </label><label htmlFor="file-input" className="block text-gray-700 font-bold mb-2">
                                       Height:{respo?.height}
                                    </label><label htmlFor="file-input" className="block text-gray-700 font-bold mb-2">
                                    Width:{respo?.width}
                                    </label>
                                    </div>
                                    <div className="relative ml-5">
                                    <img 
                                    style={{height:'200px'}}
      src={imageUp}
      alt="new"
      />
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

export default Home;