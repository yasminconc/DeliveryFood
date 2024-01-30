'use client'

function page() {
  return (
    <div className="bg-blue-500">
      <div>
        <img src="" alt="" />
        <div>
          <div>
            <div>
              <h1>Welcome back!</h1>
              <p>Login to your exiting account</p>
            </div>

            <form action="">
              <input 
                type="email" 
                placeholder="Email"
                
              />
              <input 
                type="password" 
                placeholder="Password"
                
              />

              <div>
                <button>Login</button>
              </div>
            </form>
          </div>

          <div>
            <p>dont have an account? <span>signup</span></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page