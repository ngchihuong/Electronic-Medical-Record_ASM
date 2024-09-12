import { Outlet } from "react-router-dom"
import { AuthContext } from "./components/contexts/auth.context"
import { Spin } from "antd"
import Header from "./components/layout/header"
import { useContext, useEffect } from "react"
import axios from "./utils/axios.customize"

function App() {
  const context = useContext(AuthContext)
  useEffect(() => {
    const fetchAccount = async () => {
      const res = await axios.get(`/users/account`)
      
      if (res) {
        if (res ) {
          context?.setAuth({
            isAuthenticated: true,
            user: {
              email: res.email,
              fullName: res.fullName,
            }
          })
        }
      }
    }
    fetchAccount()
    
  }, [])
  return (
    <div>
      {context?.appLoading ?
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
          <Spin size="large"></Spin>
        </div>
        :
        <>
          <Header />
          <Outlet />
        </>
      }
    </div>
  )
}

export default App
