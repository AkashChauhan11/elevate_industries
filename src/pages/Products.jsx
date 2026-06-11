import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        { id: "all", name: "All" },
        { id: "brass", name: "Brass" },
        { id: "aluminum", name: "Aluminum" },
        { id: "other", name: "Other" },
    ];

    // Dynamically import all images from assets/parts
    // Use import.meta.glob with eager: true for broader compatibility
    const images = import.meta.glob("../assets/parts/*.{jpg,png,jpeg,webp}", {
        eager: true,
    });

    // Build product objects from filenames
    const products = useMemo(() => {
        const list = [];
        let id = 1;
        for (const path in images) {
            const mod = images[path];
            // Example path: ../assets/parts/brass-1.jpg
            const parts = path.split("/");
            const filename = parts[parts.length - 1];
            const nameWithoutExt = filename.replace(/\.[^.]+$/, "");

            // Determine category: filenames starting with 'brass' -> brass, 'alu' -> aluminum
            let category = "other";
            if (/^brass/i.test(nameWithoutExt)) category = "brass";
            if (/^alu/i.test(nameWithoutExt)) category = "aluminum";

            // Create a readable product name from filename, e.g. brass-1 -> Brass 1
            const name = nameWithoutExt
                .replace(/[-_]/g, " ")
                .replace(/\b(alu)\b/i, "Aluminum")
                .replace(/\b(brass)\b/i, "Brass");

            list.push({ id: id++, name, category, image: mod.default || mod });
        }

        // Sort by category then name to keep brass and alu grouped predictably
        list.sort(
            (a, b) =>
                a.category.localeCompare(b.category) ||
                a.name.localeCompare(b.name)
        );
        return list;
    }, []);

    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter(
                  (product) => product.category === selectedCategory
              );

    const productBenefits = [
        {
            title: "Premium Quality",
            description: "All products meet or exceed industry standards",
        },
        {
            title: "Durability",
            description: "Corrosion-resistant and long-lasting performance",
        },
        {
            title: "Precision",
            description: "Tight tolerances and exact specifications",
        },
    ];

    const customFeatures = [
        "Custom design and prototyping",
        "Material selection guidance",
        "Quality testing and certification",
        "Rapid prototyping and production",
    ];

    const CheckIcon = ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
            <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
            />
        </svg>
    );

    return (
        <div className="bg-cream">
            <PageHero eyebrow="Our Catalog" title="Our Products">
                Comprehensive range of high-quality brass, aluminum, and
                specialized components for industrial and commercial applications
            </PageHero>

            {/* Category Filter + Grid */}
            <section className="section-padding bg-cream">
                <div className="container-custom">
                    {/* Filter pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => {
                            const active = selectedCategory === category.id;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 ${
                                        active
                                            ? "bg-brass-gradient text-espresso-900 shadow-brass"
                                            : "bg-white text-clay border border-line hover:border-brass hover:text-espresso"
                                    }`}
                                >
                                    {category.name}
                                </button>
                            );
                        })}
                    </div>

                    {/* Products Grid */}
                    <motion.div
                        key={selectedCategory}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.04 },
                            },
                        }}
                    >
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ y: -6 }}
                                className="card card-hover overflow-hidden group"
                            >
                                <div className="h-44 sm:h-52 flex items-center justify-center bg-light-grey-400 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        className="object-contain h-full w-full p-4 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Custom Manufacturing Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="eyebrow mb-4">Built to Order</span>
                            <h2 className="section-title mt-4 mb-6">Custom Manufacturing</h2>
                            <p className="lead mb-8">
                                Can't find exactly what you need? Our expert
                                engineering team can design and manufacture
                                custom brass components tailored to your
                                specific requirements.
                            </p>
                            <ul className="space-y-4 mb-9">
                                {customFeatures.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <span className="w-7 h-7 rounded-lg bg-brass-gradient flex items-center justify-center mr-3 shrink-0">
                                            <CheckIcon className="w-4 h-4 text-espresso-900" />
                                        </span>
                                        <span className="text-espresso font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="btn-primary">
                                Discuss Custom Requirements
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="card p-9"
                        >
                            <h3 className="font-serif text-2xl font-bold text-espresso mb-7">
                                Why Choose Our Products?
                            </h3>
                            <div className="space-y-6">
                                {productBenefits.map((benefit) => (
                                    <div key={benefit.title} className="flex items-start">
                                        <span className="w-9 h-9 rounded-full bg-cream-200 flex items-center justify-center mr-4 mt-0.5 shrink-0">
                                            <CheckIcon className="w-4 h-4 text-brass-dark" />
                                        </span>
                                        <div>
                                            <h4 className="font-semibold text-espresso text-lg">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-clay">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
