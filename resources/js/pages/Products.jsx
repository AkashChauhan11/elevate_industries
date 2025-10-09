import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

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

    return (
        <div className="bg-cream-white-100">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-warm-yellow-200 to-warm-yellow-300 text-gray-800 section-padding">
                <div className="container-custom text-center">
                    <h1 className="text-5xl font-bold mb-6">Our Products</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Comprehensive range of high-quality brass, aluminum, and
                        specialized components for industrial and commercial
                        applications
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section
                className="section-padding"
                style={{ backgroundColor: "#fff8e8" }}
            >
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    selectedCategory === category.id
                                        ? "bg-warm-yellow-200 text-gray-800 shadow-lg"
                                        : "text-gray-800 hover:bg-warm-yellow-200 hover:text-gray-800 border border-warm-yellow-200"
                                }`}
                                style={{
                                    backgroundColor:
                                        selectedCategory === category.id
                                            ? undefined
                                            : "#dfe0df",
                                }}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-warm-yellow-100 hover:scale-105"
                            >
                                <div
                                    className="h-48 flex items-center justify-center"
                                    style={{ backgroundColor: "#dfe0df" }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-contain h-full w-full"
                                    />
                                </div>
                                {/* <div className="p-4 text-center">
                                    <span className="sr-only">
                                        {product.name}
                                    </span>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Manufacturing Section */}
            <section
                className="section-padding"
                style={{ backgroundColor: "#dfe0df" }}
            >
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                Custom Manufacturing
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Can't find exactly what you need? Our expert
                                engineering team can design and manufacture
                                custom brass components tailored to your
                                specific requirements.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-3 text-warm-yellow-200"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-gray-700">
                                        Custom design and prototyping
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-3 text-warm-yellow-200"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-gray-700">
                                        Material selection guidance
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-3 text-warm-yellow-200"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-gray-700">
                                        Quality testing and certification
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-3 text-warm-yellow-200"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-gray-700">
                                        Rapid prototyping and production
                                    </span>
                                </li>
                            </ul>
                            <Link
                                to="/contact"
                                className="inline-block bg-warm-yellow-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-warm-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Discuss Custom Requirements
                            </Link>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-warm-yellow-200 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Why Choose Our Products?
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-warm-yellow-200 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg
                                            className="w-4 h-4 text-gray-800"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            Premium Quality
                                        </h4>
                                        <p className="text-gray-600">
                                            All products meet or exceed industry
                                            standards
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-warm-yellow-200 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg
                                            className="w-4 h-4 text-gray-800"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            Durability
                                        </h4>
                                        <p className="text-gray-600">
                                            Corrosion-resistant and long-lasting
                                            performance
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-warm-yellow-200 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg
                                            className="w-4 h-4 text-gray-800"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            Precision
                                        </h4>
                                        <p className="text-gray-600">
                                            Tight tolerances and exact
                                            specifications
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
