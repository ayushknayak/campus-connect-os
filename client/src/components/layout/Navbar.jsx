import { ArrowUpRight, Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="!static z-40 px-4 pt-4 sm:px-6 lg:px-8"
        >
            <nav
                className="
                    mx-auto
                    flex
                    h-[72px]
                    max-w-[1400px]
                    items-center
                    justify-between
                    rounded-[22px]
                    border
                    border-zinc-200/80
                    bg-white
                    px-5
                    shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                    sm:px-7
                "
            >
                {/* Logo */}
                <a
                    href="/"
                    className="group flex items-center gap-3"
                >
                    {/* Logo mark */}
                    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-zinc-950 text-white">
                        <span className="relative z-10 text-sm font-bold">
                            C
                        </span>

                        <div
                            className="
                                absolute
                                inset-0
                                translate-y-full
                                bg-blue-600
                                transition-transform
                                duration-300
                                group-hover:translate-y-0
                            "
                        />

                        <span
                            className="
                                absolute
                                z-10
                                text-sm
                                font-bold
                                opacity-0
                                transition-opacity
                                duration-300
                                group-hover:opacity-100
                            "
                        >
                            C
                        </span>
                    </div>

                    {/* Brand */}
                    <div className="leading-none">
                        <p className="text-[16px] font-bold tracking-[-0.02em] text-zinc-950">
                            Campus Career
                        </p>

                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                            OS
                        </p>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div
                    className="
                        absolute
                        left-1/2
                        hidden
                        -translate-x-1/2
                        items-center
                        gap-9
                        lg:flex
                    "
                >
                    {[
                        ["Discover", "#discover"],
                        ["Track", "#tracker"],
                        ["Experiences", "#experiences"],
                        ["Community", "#community"],
                    ].map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            className="
                                relative
                                text-[14px]
                                font-medium
                                text-zinc-500
                                transition-colors
                                duration-200
                                hover:text-zinc-950
                            "
                        >
                            {label}

                            <span
                                className="
                                    absolute
                                    -bottom-2
                                    left-0
                                    h-[1.5px]
                                    w-0
                                    bg-blue-600
                                    transition-all
                                    duration-300
                                    hover:w-full
                                "
                            />
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button
                        className="
                            hidden
                            rounded-lg
                            px-4
                            py-2.5
                            text-[14px]
                            font-medium
                            text-zinc-600
                            transition-colors
                            hover:text-zinc-950
                            sm:block
                        "
                    >
                        Sign in
                    </button>

                    <button
                        className="
                            group
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-zinc-950
                            px-5
                            py-2.5
                            text-[14px]
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-blue-600
                            hover:shadow-lg
                            hover:shadow-blue-600/20
                        "
                    >
                        Get started

                        <ArrowUpRight
                            size={15}
                            className="
                                transition-transform
                                duration-300
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                            "
                        />
                    </button>

                    {/* Mobile */}
                    <button
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-zinc-200
                            bg-white
                            text-zinc-700
                            transition
                            hover:bg-zinc-50
                            lg:hidden
                        "
                    >
                        <Menu size={18} />
                    </button>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;