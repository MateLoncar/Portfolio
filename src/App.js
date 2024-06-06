import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HackerNews from './components/HackerNews';

function App() {
    const [showHackerNews, setShowHackerNews] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="container">
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <section>
                {showHackerNews ? (
                <HackerNews onClose={() => setShowHackerNews(false)} />
            ) : (
                <button className="show-hacker-news-button" onClick={() => setShowHackerNews(true)}>
                    Hacker News
                </button>
            )}

                </section>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;
