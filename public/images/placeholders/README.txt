Every photo on the site is a placeholder — drop your own image in at the
same filename and it swaps in automatically, no code changes needed.

  hero-team.jpg           Home hero photo             (4:5 or square crop)
  company-team.jpg        Home "Our Company" photo    (4:5 crop)
  team-growth.jpg         Home "Team Growth" photo    (4:5 crop)
  who-we-are.jpg          What We Do "Who We Are"     (4:5 or square crop)
  about-header.jpg        About page header           (4:3 crop)
  what-we-do-header.jpg   What We Do page header      (4:3 crop)
  careers-header.jpg      Careers page header         (4:3 crop)
  blog-header.jpg         Blog page header            (4:3 crop)
  contact-header.jpg      Contact page header         (4:3 crop)
  about-banner.jpg        About page banner section         (wide, ~12:5)
  what-we-do-banner.jpg   What We Do page banner section    (wide, ~12:5)
  careers-banner.jpg      Careers page banner section       (wide, ~12:5)
  blog-featured-banner.jpg  Blog index featured post image  (wide, ~12:5)
  blog-post-featured.jpg  Every individual blog post's image (wide, ~12:5,
                          shared by all posts — give BlogPost its own
                          `image` field in src/data/blog.ts if you want a
                          distinct photo per post instead)
  blog-card-thumb.jpg     Blog grid card thumbnail    (16:9, shared by
                          every card in the grid, same note as above)
  team-header.jpg         Our Team page header               (4:3 crop)
  team/<slug>.jpg         One per person on /our-team (leadership and
                          independent partners) — filename is their name,
                          lowercased and hyphenated, e.g. team/ken-tang.jpg.
                          Add a new person to leadershipTeam or
                          independentPartners in src/data/about.ts and its
                          card automatically looks for team/<their-slug>.jpg.

Keep the same filename and roughly the same aspect ratio (the site crops
to fill the frame via object-cover, so exact pixel dimensions don't
matter — a wider or taller source just gets center-cropped). A real photo
of 1600px on the long edge or larger looks sharp at every size the site
displays it at.

The brand logo has its own placeholder system — see public/brand/README.txt.
