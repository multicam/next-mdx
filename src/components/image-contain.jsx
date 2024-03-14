import Image from 'next/image';
import cx from 'classnames';
import Picture from 'next-export-optimize-images/picture'

export const ImageContain = (props) => {
    return (
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 padding-subtle">
            <div
                className={cx("relative rounded pb-[56.25%]", 'bg-red-400', 'overflow-hidden')}>
                <Picture
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={props.src}
                    alt={props.src}
                    format="avif;jpg"
                    width={1920} height={1280}
                />
            </div>
        </div>
    )
}
