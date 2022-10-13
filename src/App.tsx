import { Envelope } from 'phosphor-react'
import { Button } from './components/Button/Button'
import { CheckBox } from './components/Form/CheckBox/CheckBox'
import { TextInput } from './components/Form/TextInput/TextInput'
import { Heading } from './components/Heading/Heading'
import { Text } from './components/Text/Text'
import { Logo } from './Logo'
import './styles/global.css'

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size="lg" className="text-gray-100 mt-4">
          IgniteLab
        </Heading>
        <Text size='lg' className="text-gray-400 mt-1">Faça login e comece a usar</Text>
      </header>

      <form className='flex flex-col items-stretch w-full max-w-sm gap-4 mt-6'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>

            <TextInput.Input type="email" placeholder='Digite o seu e-mail' name='email' id='email'/>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>

            <TextInput.Input type="password" placeholder='************' name='password' id='password'/>
          </TextInput.Root>
        </label>

        <label className='flex items-center gap-2' htmlFor="remember">
          <CheckBox id="remember" />
          <Text className='text-gray-200' size="sm">Lembrar minha senha por 30 dias!</Text>
        </label>

        <Button type='button' className='mt-4'>Entrar na plataforma</Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size="sm">
          <a href="#0" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="#0" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}
