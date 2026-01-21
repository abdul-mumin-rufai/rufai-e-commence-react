function About() {


    return (
        <>
            <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
                <h1 className="text-4xl font-bold leading-none tracking-tight 
                sm:text-6xl">
                    We love
                </h1>
                <div className="stats bg-primary shadow">
                    <div className="stat">
                        <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
                            Titanium
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-6 text-lg lesding-8 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque magnam odit aliquid quod inventore illum nam quas
                . Dolor nam quisquam commodi voluptatem dignissimos excepturi
                aliquid expedita ratione fugiat quam? Fugit natus esse enim, impedit
                nemo cum adipisci incidunt sunt asperiores!
            </p>
        </>
    )
}

export default About;