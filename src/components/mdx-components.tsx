import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

const mdxComponents = {
  // Image,
  Image: (props: any) => <Image {...props} alt={props.alt || " "} />,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code) as any

  return <MDXContent components={mdxComponents} />
}
