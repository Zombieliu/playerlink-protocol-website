

import Header from "../../components/header";
import {QuestionMarkCircleIcon} from "@heroicons/react/solid";
import Tail from "../../components/tail";
import {useState,useRef} from "react";


export default function Airdrop() {
    const[PL,setPL]=useState(0)
    const [AWARD,setAWARD]=useState(0)


  const submit=()=>{
      // @ts-ignore
      let  pl = document.getElementById("PL").value
      if (/^(?!(0[0-9]{0,}$))[0-9]{1,}[.]{0,}[0-9]{0,}$/.test(pl)){
          let award =pl*5
          setPL(pl)
          setAWARD(award)
      }else {
          alert('Please enter an integer') ;
          // @ts-ignore
          document.getElementById("PL").value=''
          setPL(0);
          setAWARD(0)
      }


}
    return (
        <div className="min-h-screen bg-white">
            <header>
                <Header></Header>
            </header>
            <main>
                <div>
                    <div className="relative pt-20">
                        <div className="absolute inset-x-0 bottom-0    "/>
                        <div className=" mx-auto  ">
                            <div className="relative sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://cdn.discordapp.com/attachments/897398778166906911/930821324136390716/12312312asd.jpg"
                                        alt="People working on laptops"
                                    />

                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-32">
                                    <div className="w-1/2">
                                        <span className="block text-black text-4xl  tracking-tight  pb-12">Estimated PlayerLink Airdrop Rewards</span>
                                        <span className="block text-xl text-black">Use this calculator to estimate how much you`ll receive if the public loan ends now.
                                    </span>
                                        <div className="flex mt-10">
                                        <div className="mt-1 relative rounded-md shadow-sm ">
                                            <input

                                                type="text"
                                                name="name"
                                                id="PL"
                                                className="block w-32 h-12 rounded-lg border border-gray-300 pl-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
                                                placeholder="0"



                                            />
                                        </div>
                                            <button onClick={submit} className="ml-5 p-2 bg-gray-500 rounded-lg text-white transition duration-500 transform  hover:-translate-y-1">
                                                Calculate
                                            </button>

                                        </div>

                                        <div className="text-lg">
                                        <div className="mt-10 flex">
                                            收获 <div className="text-3xl mx-0.5 -mt-1 text-yellow-500">{AWARD}</div>个GLMR 需要贡献
                                        </div>

                                           <div className='mt-2 flex'> <div className="text-3xl mx-1.5 -mt-1 text-yellow-500 flex">{PL}</div>

                                               <div> 个PL</div>
                                           </div>

                                        <div>
                                            截至目前 已收到35,759,931个PL贡献量</div>
                                        </div>

                                        <div className="mt-10">
                                            Moonbeam奖励将根据您所贡献DOT的百分比发放（您所贡献的DOT质押量/总的DOT质押量）*150,000,000个GLMR
                                        </div>
                                        <div className="mt-10">
                                            30%的Token奖励池将在Moonbeam成功上线后立即释放。剩下70%的Token奖励池将在租赁期（96 周）内线性释放。
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Tail></Tail>
        </div>
    );
}
