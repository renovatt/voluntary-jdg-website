import { PostMock } from '@/mocks/Post'
import CardPost from '@/app/components/CardPost'

export default function Post() {
  return (
    <CardPost
      key={PostMock.id}
      title={PostMock.title}
      image={PostMock.image}
      subtitle={PostMock.subtitle}
      createdAt={PostMock.createdAt}
      description={PostMock.description}
    />
  )
}
