import React, { createContext, useContext, useState } from "react"

type AuthContextProps = {
  logged: boolean
  signIn(email: string, password: string): void
  signOut(): void
}

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [logged, setlogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@minha-carteira:logged')

    return !!isLogged
  })

  const signIn = (email: string, password: string) => {
    if (email === 'igorxuxicotrim@gmail.com' && password === '123') {
      localStorage.setItem('@minha-carteira:logged', 'true')
    } else {
      alert('Senha ou usuário inválidos!')
    }
  }

  const signOut = () => {
    localStorage.removeItem('@minha-carteira:logged')
    setlogged(false)
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
