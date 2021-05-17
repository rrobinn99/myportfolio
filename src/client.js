// this is what we use to talk to sanity

import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "4tozc74x",
  dataset: "production"
})