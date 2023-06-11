import type { IOrganizers } from '../global';

export const Organizers: IOrganizers = {
  data: [
    {
      id: 2,
      name: 'DevsKE',
      email: 'connect@devs.info.ke',
      description: 'DevsKE is a Kenyan dev communities & software developer directory.',
      facebook: 'devsinfoKE',
      twitter: 'devsinfoKE',
      instagram: null,
      logo: 'https://res.cloudinary.com/droidconke/image/upload/v1657570286/prod/upload/logo/qpt3oto32djwvhgapqnp.png',
      slug: 'devske-663',
      status: 'active',
      created_at: '2022-07-11 23:11:26',
      upcoming_events_count: 0,
      total_events_count: 0,
    },
    {
      id: 1,
      name: 'Droidcon Kenya',
      email: 'droidconke@gmail.com',
      description: 'Largest Android Focused Developer conference in Africa.',
      facebook: 'droidconke',
      twitter: 'droidconke',
      instagram: 'droidconke',
      logo: 'https://res.cloudinary.com/droidconke/image/upload/v1657570135/prod/upload/logo/pgeealuobwzkoxsjiqgx.jpg',
      slug: 'droidcon-ke-645',
      status: 'active',
      created_at: '2021-09-10 16:26:32',
      upcoming_events_count: 0,
      total_events_count: 1,
    },
  ],
  meta: {
    paginator: {
      count: 2,
      per_page: '30',
      current_page: 1,
      next_page: null,
      has_more_pages: false,
      next_page_url: null,
      previous_page_url: null,
    },
  },
};
