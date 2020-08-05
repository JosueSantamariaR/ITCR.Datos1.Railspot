import React from 'react'

export const Admin=()=>(
  <div>
  <div className="body" />
  <div className="grad" />
  <div className="header">
    <div>Rail<span>spot admins login</span></div>
  </div>
  <br />
  <div className="login">
    <input type="text" placeholder="username" name="user" /><br />
    <input type="password" placeholder="password" name="password" /><br />
    <input type="button" defaultValue="Login" />
  </div>
</div>
)