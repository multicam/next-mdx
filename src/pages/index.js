import {ImageContain} from '@/components/image-contain';

export default function Page() {
    return (
        <section className="padding-page padding-block">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 pb-3 padding-subtle">
                    <h2 className="text-5xl mb-2 font-bold">For designers. By designers.</h2>
                    <p className="text-xl">Our team of graphic design tutors comprises seasoned professionals who are
                        not only passionate about teaching but also active practitioners in the design industry.</p>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <ImageContain src="/images/dev/blue-macbooks-mod-12-hd.png" />
                    <ImageContain src="/images/dev/candy-three-mod-3-hd.png" />
                    <ImageContain src="/images/dev/falling-cameras-mod-6-hd.png" />
                </div>
            </div>
        </section>
    )
}