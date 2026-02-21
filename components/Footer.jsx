export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!">
                    <img src="/assets/logolightmode.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logodarkmode.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:imnicoledellamas@gmail.com">imnicoledellamas@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© 2026 Nicole A. De Llamas | Web XR Developer • All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a target='_blank' href="https://github.com/nicole020301" rel="noopener noreferrer">GitHub</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}