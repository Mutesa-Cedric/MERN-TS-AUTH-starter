import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/form/Input';
import CopyRight from '../../components/ui/CopyRight';
interface SignupProps {
  signup: () => void;
}

const SignupForm = ({ signup }: SignupProps) => {

  // darkmode
  const [mode, setMode] = useState<string | null>('light')
  useEffect(() => {
    let darkMode: string | null = localStorage.getItem("darkMode");
    setMode(darkMode);
  }, [])
  // darkmode

  // form data

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  })

  const handleChange = (event: Event) => {
    setFormData(prevData => {
      return {
        ...prevData,

      }
    })
  }
  // form data

  // error messages
  interface ErrorMessages {
    emailMessage: string
    passwordMessage: string
    allFieldsMessage: string
    userNameMessage: string
  }
  const errorMessages: ErrorMessages = {
    emailMessage: '',
    passwordMessage: '',
    allFieldsMessage: '',
    userNameMessage: ''
  }
  // error messages


  return (
    <div className="w-screen h-screen overflow-hidden flex items-center flex-col justify-center"
      style={{ backgroundColor: `${mode === "dark" ? "#252329" : "white"}` }}>
      <form method="post" onSubmit={() => {
        signup.bind(formData)
      }} className="lg:w-[30%] md:w-[70%] sm:w-[100%] h-auto flex justify-center items-center rounded-xl shadow-md  px-14 py-8">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex justify-between items-center w-full">
            <Link to={'/'}>
              <div className="flex items-center mb-4 text-primary text-2xl font-semibold">
                <span>LOGO</span>
              </div>
            </Link>

            <div>
              {mode !== "dark" && <svg className="MuiSvgIcon-root w-8 h-8 mr-4 cursor-pointer" fill="#828282" focusable="false" viewBox="0 0 24 24" aria-hidden="true" onClick={() => setMode('dark')}><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12.29 7c-.74 0-1.45.17-2.08.46 1.72.79 2.92 2.53 2.92 4.54s-1.2 3.75-2.92 4.54c.63.29 1.34.46 2.08.46 2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
              </svg>}
              {mode === "dark" && <svg className="MuiSvgIcon-root w-8 h-8 mr-4 cursor-pointer" focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="white" onClick={() => setMode("light")}><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path><circle cx="12" cy="12" r="2"></circle></svg>}
            </div>
          </div>
          <div className="my-2">
            <p className={mode === "dark" ? "text-[#E0E0E0]" : ""}>start using this app with easy steps</p>
          </div>
          <div className="my-2 flex flex-col w-full">
            <Input name='userName' value={formData.userName} placeholder="username" type='text' onChange={() => handleChange} mode={mode} />
            <p className="text-red-300 font-[600] mx-auto animate-pulse">{errorMessages.userNameMessage}</p>
            <Input type="Email" mode={mode} placeholder="email" name="email" onChange={() => handleChange} value={formData.email} />
            <p className="text-red-300 font-[600] mx-auto animate-pulse">{errorMessages.emailMessage}</p>
            <Input type="password" mode={mode} placeholder="Password" name="password" onChange={() => handleChange} value={formData.password} />
            <p className="text-red-300 font-[600] mx-auto animate-pulse">{errorMessages.passwordMessage}</p>
          </div>
          <p className="text-red-300 font-[600] mx-auto animate-pulse">{errorMessages.allFieldsMessage}</p>
          <div className="w-full my-3">
            <button className="bg-primary text-white w-full py-2 rounded-[8px] text-lg">Start using this app</button>
          </div>
          <div>
            <p className="text-[#828282] my-1">or continue with these social profiles</p>
          </div>
          
          <div>
            <p className="text-[#828282]">already a member?
              <Link to="/login"><span className="text-primary font-semibold px-1">login</span></Link>
            </p>
          </div>
        </div>
      </form>
      <CopyRight />
    </div>
  )
}

export default SignupForm;