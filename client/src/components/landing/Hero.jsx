import {
    ArrowUpRight,
    Check,
    ChevronRight,
    Clock3,
    FileText,
    BriefcaseBusiness,
    Users,
} from "lucide-react";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const applications = [
    {
        company: "Google",
        role: "Software Engineering Intern",
        status: "Interview",
        statusClass: "bg-emerald-50 text-emerald-700",
        initial: "G",
    },
    {
        company: "Microsoft",
        role: "Software Engineer Intern",
        status: "Applied",
        statusClass: "bg-blue-50 text-blue-700",
        initial: "M",
    },
    {
        company: "Amazon",
        role: "Backend Engineering Intern",
        status: "OA",
        statusClass: "bg-amber-50 text-amber-700",
        initial: "A",
    },
];

const Hero = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24"
        >
            {/* Background texture */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.3]"
                style={{
                    backgroundImage:
                        "radial-gradient(#a1a1aa 0.65px, transparent 0.65px)",
                    backgroundSize: "13px 13px",
                    maskImage:
                        "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
                }}
            />

            {/* Soft background glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-[120px]" />

            <div className="relative mx-auto max-w-[1400px]">

                {/* Intro label */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="mb-10 flex items-center gap-2 sm:mb-14"
                >
                    <span className="h-2 w-2 rounded-full bg-blue-600" />

                    <span className="text-[11px] font-semibold tracking-[0.16em] text-zinc-600 uppercase sm:text-xs">
                        The career OS for students
                    </span>

                    <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className="text-blue-600"
                    />
                </motion.div>


                {/* Main hero layout */}
                <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-20">

                    {/* =====================================================
                        LEFT — HERO COPY
                    ====================================================== */}
                    <div className="max-w-2xl">

                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: "easeOut",
                            }}
                            className="text-[clamp(3.4rem,7vw,7rem)] font-bold leading-[0.9] tracking-[-0.065em] text-zinc-950"
                        >
                            Your career
                            <br />

                            shouldn't feel
                            <br />

                            <span className="text-blue-600">
                                scattered.
                            </span>
                        </motion.h1>


                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.7,
                                delay: 0.25,
                                ease: "easeOut",
                            }}
                            className="mt-8 max-w-xl text-[17px] font-medium leading-8 text-zinc-700 sm:text-[18px]"
                        >
                            Discover opportunities, track every application,
                            learn from real candidate experiences, and build
                            a profile that actually represents you.
                        </motion.p>


                        {/* CTA */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.7,
                                delay: 0.35,
                            }}
                            className="mt-9 flex flex-col gap-3 sm:flex-row"
                        >
                            <button
                                className="group flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                            >
                                Get started

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={2}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </button>

                            <button
                                className="group flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-50"
                            >
                                Explore opportunities

                                <ChevronRight
                                    size={16}
                                    strokeWidth={2}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                                />
                            </button>
                        </motion.div>


                        {/* Product promises */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.7,
                                delay: 0.45,
                            }}
                            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-zinc-600"
                        >
                            <div className="flex items-center gap-2">
                                <Check
                                    size={14}
                                    strokeWidth={2.5}
                                    className="text-emerald-600"
                                />

                                <span>
                                    One place for your applications
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Check
                                    size={14}
                                    strokeWidth={2.5}
                                    className="text-emerald-600"
                                />

                                <span>
                                    Built for students
                                </span>
                            </div>
                        </motion.div>

                    </div>


                    {/* =====================================================
                        RIGHT — PRODUCT PREVIEW
                    ====================================================== */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 0.35,
                            ease: "easeOut",
                        }}
                        className="relative"
                    >

                        {/* Floating label */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 1,
                                duration: 0.5,
                            }}
                            className="absolute -right-2 -top-5 z-20 hidden rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_15px_45px_rgba(0,0,0,0.08)] sm:block lg:-right-4"
                        >
                            <p className="text-[9px] font-semibold tracking-[0.15em] text-zinc-400 uppercase">
                                Applications
                            </p>

                            <p className="mt-1 text-lg font-bold tracking-tight text-zinc-950">
                                Stay organized.
                            </p>
                        </motion.div>


                        {/* Dashboard */}
                        <div className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.10)] sm:rounded-[30px]">

                            {/* Product top bar */}
                            <div className="flex h-14 items-center justify-between border-b border-zinc-100 px-4 sm:px-5">

                                <div className="flex items-center gap-2.5">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 text-[11px] font-bold text-white">
                                        C
                                    </div>

                                    <span className="text-sm font-bold tracking-tight text-zinc-950">
                                        CampusOS
                                    </span>
                                </div>

                                <div className="hidden items-center gap-2 sm:flex">
                                    <div className="h-2 w-2 rounded-full bg-zinc-200" />
                                    <div className="h-2 w-2 rounded-full bg-zinc-200" />
                                    <div className="h-2 w-2 rounded-full bg-zinc-200" />
                                </div>

                            </div>


                            {/* Dashboard body */}
                            <div className="grid min-h-[440px] grid-cols-[130px_1fr] sm:min-h-[470px] sm:grid-cols-[165px_1fr]">

                                {/* Sidebar */}
                                <aside className="border-r border-zinc-100 bg-zinc-50/70 p-3 sm:p-4">

                                    <div className="mb-6 px-2 pt-2">
                                        <p className="text-[9px] font-semibold tracking-[0.16em] text-zinc-400 uppercase">
                                            Workspace
                                        </p>
                                    </div>

                                    <div className="space-y-1">

                                        <div className="flex items-center gap-2 rounded-lg bg-zinc-950 px-3 py-2.5 text-xs font-semibold text-white">
                                            <BriefcaseBusiness size={14} />
                                            Overview
                                        </div>

                                        <div className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-medium text-zinc-500">
                                            <FileText size={14} />
                                            Applications
                                        </div>

                                        <div className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-medium text-zinc-500">
                                            <BriefcaseBusiness size={14} />
                                            Opportunities
                                        </div>

                                        <div className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-medium text-zinc-500">
                                            <Users size={14} />
                                            Experiences
                                        </div>

                                    </div>

                                </aside>


                                {/* Dashboard content */}
                                <main className="min-w-0 p-5 sm:p-7">

                                    <div className="flex items-start justify-between">

                                        <div>
                                            <p className="text-[9px] font-semibold tracking-[0.15em] text-zinc-400 uppercase">
                                                Monday, August 24
                                            </p>

                                            <h2 className="mt-2 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                                                Your career dashboard
                                            </h2>
                                        </div>

                                        <span className="hidden rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-700 sm:block">
                                            Active
                                        </span>

                                    </div>


                                    {/* Metrics */}
                                    <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">

                                        <div className="rounded-xl border border-zinc-200 p-3 sm:p-4">
                                            <p className="text-[9px] font-medium text-zinc-500">
                                                Applications
                                            </p>

                                            <p className="mt-2 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                                                12
                                            </p>

                                            <p className="mt-1 text-[9px] font-semibold text-emerald-600">
                                                +3 this week
                                            </p>
                                        </div>


                                        <div className="rounded-xl border border-zinc-200 p-3 sm:p-4">
                                            <p className="text-[9px] font-medium text-zinc-500">
                                                Interviews
                                            </p>

                                            <p className="mt-2 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                                                3
                                            </p>

                                            <p className="mt-1 text-[9px] font-semibold text-blue-600">
                                                1 upcoming
                                            </p>
                                        </div>


                                        <div className="rounded-xl border border-zinc-200 p-3 sm:p-4">
                                            <p className="text-[9px] font-medium text-zinc-500">
                                                Offers
                                            </p>

                                            <p className="mt-2 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                                                1
                                            </p>

                                            <p className="mt-1 text-[9px] font-semibold text-emerald-600">
                                                Keep going
                                            </p>
                                        </div>

                                    </div>


                                    {/* Recent applications */}
                                    <div className="mt-8">

                                        <div className="flex items-center justify-between">

                                            <h3 className="text-xs font-bold text-zinc-950 sm:text-sm">
                                                Recent applications
                                            </h3>

                                            <span className="cursor-pointer text-[10px] font-semibold text-blue-600">
                                                View all →
                                            </span>

                                        </div>


                                        <div className="mt-3 divide-y divide-zinc-100 rounded-xl border border-zinc-200">

                                            {applications.map((application) => (
                                                <div
                                                    key={application.company}
                                                    className="flex items-center justify-between gap-3 p-3 sm:p-4"
                                                >

                                                    <div className="flex min-w-0 items-center gap-3">

                                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-xs font-bold text-zinc-700">
                                                            {application.initial}
                                                        </div>

                                                        <div className="min-w-0">

                                                            <p className="truncate text-[10px] font-bold text-zinc-950 sm:text-xs">
                                                                {application.role}
                                                            </p>

                                                            <p className="mt-1 text-[9px] font-medium text-zinc-500">
                                                                {application.company}
                                                            </p>

                                                        </div>

                                                    </div>


                                                    <span
                                                        className={`shrink-0 rounded-full px-2.5 py-1 text-[8px] font-semibold sm:text-[9px] ${application.statusClass}`}
                                                    >
                                                        {application.status}
                                                    </span>

                                                </div>
                                            ))}

                                        </div>

                                    </div>


                                    {/* Upcoming step */}
                                    <div className="mt-5 flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3">

                                        <div className="flex items-center gap-3">

                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                                                <Clock3
                                                    size={14}
                                                    className="text-blue-600"
                                                />
                                            </div>

                                            <div>

                                                <p className="text-[9px] font-semibold text-zinc-500 uppercase">
                                                    Next step
                                                </p>

                                                <p className="mt-0.5 text-[10px] font-bold text-zinc-950">
                                                    Interview preparation
                                                </p>

                                            </div>

                                        </div>

                                        <ChevronRight
                                            size={15}
                                            className="text-zinc-400"
                                        />

                                    </div>

                                </main>

                            </div>

                        </div>


                        {/* Floating product note */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 1.1,
                                duration: 0.5,
                            }}
                            className="absolute -bottom-5 left-5 hidden items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_15px_45px_rgba(0,0,0,0.08)] sm:flex"
                        >
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />

                            <span className="text-[10px] font-semibold text-zinc-700">
                                Everything in one workspace
                            </span>
                        </motion.div>

                    </motion.div>

                </div>


                {/* =====================================================
                    PRODUCT PROMISE STRIP
                ====================================================== */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 1,
                        duration: 0.6,
                    }}
                    className="mt-20 grid border-y border-zinc-200 sm:grid-cols-3"
                >

                    <div className="flex items-center gap-3 border-b border-zinc-200 py-5 sm:border-b-0 sm:border-r sm:px-6">

                        <BriefcaseBusiness
                            size={18}
                            strokeWidth={1.8}
                            className="text-blue-600"
                        />

                        <div>
                            <p className="text-sm font-bold text-zinc-950">
                                Discover
                            </p>

                            <p className="mt-0.5 text-xs font-medium text-zinc-600">
                                Find relevant opportunities
                            </p>
                        </div>

                    </div>


                    <div className="flex items-center gap-3 border-b border-zinc-200 py-5 sm:border-b-0 sm:border-r sm:px-6">

                        <FileText
                            size={18}
                            strokeWidth={1.8}
                            className="text-blue-600"
                        />

                        <div>
                            <p className="text-sm font-bold text-zinc-950">
                                Track
                            </p>

                            <p className="mt-0.5 text-xs font-medium text-zinc-600">
                                Never lose an application
                            </p>
                        </div>

                    </div>


                    <div className="flex items-center gap-3 py-5 sm:px-6">

                        <Users
                            size={18}
                            strokeWidth={1.8}
                            className="text-blue-600"
                        />

                        <div>
                            <p className="text-sm font-bold text-zinc-950">
                                Learn
                            </p>

                            <p className="mt-0.5 text-xs font-medium text-zinc-600">
                                Learn from real experiences
                            </p>
                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;