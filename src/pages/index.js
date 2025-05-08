import { useRouter } from 'next/router';
import Layout from '../components/layout';
import Navbar from '../components/navbar';

export default function Index() {
    const router = useRouter();
    return (
        <>
            <div className="container text-center mx-auto mt-0 p6 mb-0">
                <div className="flex justify-center">
                    <img
                        src="/images/logo.png"
                        className="max-h-96 w-auto mb-0"
                    />
                </div>
                <div>
                    <div>
                        <h1 className="font-display text-6xl mt-0">
                            The Rooted Deck
                        </h1>
                    </div>
                    <div className="font-body text-3xl mb-6">Draw inward.</div>
                </div>
                <div>
                    <div>
                        <button
                            className="bg-goldenbrown text-[#EFE5CB] font-body shadow border border-[#EFE5CB] hover:bg-[#414831] transition text-2xl font-bold py-2 px-10 rounded-full"
                            onClick={() => router.push('/register')}
                        >
                            Start Your Path, Sage
                        </button>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img
                                src="/images/linebreak.png"
                                className="max-h-38"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Index.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    );
};
