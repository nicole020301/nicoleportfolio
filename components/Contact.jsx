'use client'
import { useEffect, useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]')?.value;
        if (!hCaptcha) {
            setResult("Please fill out the captcha field.");
            return;
        }
        setResult("Sending…");
        const formData = new FormData(event.target);
        formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // get one at web3forms.com

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        }).then((r) => r.json());

        if (res.success) {
            setResult("Message sent! I'll get back to you soon. ✨");
            event.target.reset();
        } else {
            setResult("Something went wrong. Please try again.");
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null, onload = null, render = null;
            captchadiv.forEach((item) => {
                const sitekey = item.dataset.sitekey;
                lang   = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;
                if (!sitekey) item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
            });
            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang)   scriptSrc += `&hl=${lang}`;
            if (onload) scriptSrc += `&onload=${onload}`;
            if (render) scriptSrc += `&render=${render}`;
            const script = Object.assign(document.createElement("script"), {
                type: "text/javascript", async: true, defer: true, src: scriptSrc,
            });
            document.body.appendChild(script);
        }
    }

    useEffect(() => { CaptchaLoader(); }, []);

    return (
        <div id="contact" className="relative w-full px-[8%] xl:px-[12%] py-20 scroll-mt-20 overflow-hidden">

            {/* Ambient orbs */}
            <div className="hero-orb w-[400px] h-[400px] bg-purple-600/15 -bottom-20 -left-20" style={{ animationDelay: '1s' }} />
            <div className="hero-orb w-[300px] h-[300px] bg-orange-500/10 top-10 right-0" style={{ animationDelay: '3s' }} />

            {/* Header */}
            <div className="text-center mb-14">
                <div className="section-badge justify-center mx-auto w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b820e6] inline-block" />
                    Get In Touch
                </div>
                <h2 className="text-4xl sm:text-5xl font-Ovo font-semibold mb-4">
                    Say <span className="gradient-text">Hello</span>
                </h2>
                <p className="max-w-xl mx-auto font-Ovo text-gray-600 dark:text-gray-400 leading-relaxed">
                    Have a project in mind or just want to connect? Fill out the form and I&apos;ll get back to you as soon as possible.
                </p>
            </div>

            {/* Form card */}
            <div className="max-w-2xl mx-auto glow-card gradient-border rounded-3xl p-8 sm:p-10 backdrop-blur-sm">
                <form onSubmit={onSubmit} className="space-y-5">
                    <input type="hidden" name="subject" value="Nicole A. De Llamas – New Form Submission" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                required
                                className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">Message</label>
                        <textarea
                            rows="6"
                            name="message"
                            placeholder="Tell me about your project or idea…"
                            required
                            className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-sm resize-none"
                        />
                    </div>

                    {/* <div className="h-captcha" data-captcha="true" /> */}

                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <button
                            type="submit"
                            className="btn-gradient px-8 py-3 rounded-full text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/30 text-sm"
                        >
                            Send message
                            <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                        </button>
                        {result && (
                            <p className="text-sm text-gray-600 dark:text-gray-300 font-Ovo">{result}</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
