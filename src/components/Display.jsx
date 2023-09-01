import Profile from '/assets/profile-default.png';
import { Link as Anchor } from 'react-router-dom';

export default function Display({ options, show, setShow }) {
    // const connected = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="fixed z-20 top-0 left-0 w-full h-full lg:w-[430px] bg-t_background">

            <div className='flex items-center justify-between text-t_main py-2 px-6'>
                <div className='flex flex-col gap-2 py-2'>
                    <img className='w-[46px] h-[46px] rounded-[50px]' src={Profile} alt='Perfil' />
                    <p className='text-sm font-medium'> abc@example.com </p>
                </div>

                <div
                    onClick={() => setShow(!show)}
                    className="cursor-pointer">
                    <span className='rounded-full py-1 px-2 hover:bg-t_secondary'>X</span>
                </div>
            </div>

            <div className="w-full lg:w-[430px] h-full flex flex-col items-center">
                {options?.map((each, index) =>
                    <Anchor
                        onClick={each.onClick} key={index} to={each.to}
                        className='w-full rounded-lg py-1
                            cursor-pointer text-center text-[15px] font-semibold
                            hover:bg-t_secondary hover:text-t_stroke'>
                            {each.title}
                    </Anchor>
                )}
            </div>
        </div>
    )
}
