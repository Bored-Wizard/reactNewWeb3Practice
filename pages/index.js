import { useWeb3React } from '@web3-react/core'
import { injected } from '../components/wallet/connecters'
// import styles from '../styles/Home.module.css'

export default function Home() {

  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  const connect = async () => {
    try{
      await activate(injected)
    }catch(err){
      console.log(err)
      if(!active){
        window.alert("Unable to connect to metamask!")
      }
    }
  }

  const disconnectWallet = async () => {
    try{
      await deactivate()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-400 justify-start items-center" >
      <button onClick={() => connect()} className="h-10 w-56 bg-blue-600 text-center font-sans font-bold text-white rounded-md mt-5 hover:bg-blue-500 ">Connect to metamask</button>
      {active ? <span>Connected with : {account}</span> : <span className="mt-5">Not Connected</span>}
      <button onClick={() => disconnectWallet()} className="h-10 w-56 bg-blue-600 text-center font-sans font-bold text-white rounded-md mt-5 hover:bg-blue-500 ">Connect to metamask</button>
    </div>
  )
}
