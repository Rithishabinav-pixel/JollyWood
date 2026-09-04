"use client";

import { useActionState } from "react";
import { loginAdmin } from "../authActions";
import style from "../admin.module.css";

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState(loginAdmin, undefined);

  return (
    <div className={style.loginShell}>
      <div className={style.loginCard}>
        <h1>Admin Login</h1>
        <form action={action} className={style.form}>
          {state?.error && <p className={style.error}>{state.error}</p>}
          <div className={style.field}>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required autoFocus />
          </div>
          <button className={style.btn} type="submit" disabled={pending}>
            {pending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
