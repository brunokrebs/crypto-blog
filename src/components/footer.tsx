import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="border-t py-4">
      <p className=" text-sm text-center">
        Copyright © {new Date().getFullYear()}{' '}
        <span className="font-semibold">Crypto Blog</span> Todos os direitos
        reservados
      </p>
    </footer>
  )
}
