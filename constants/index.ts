export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

// export const dummyCards = [
//   {
//     id: "1",
//     title: "SnapChat Message",
//     thumbnail: "/assets/samples/thumbnail (1).png",
//     createdAt: new Date("2025-05-01"),
//     userImg: "/assets/images/jason.png",
//     username: "Jason",
//     views: 10,
//     visibility: "public",
//     duration: 156,
//   },
//   {
//     id: "2",
//     title: "Product Demo Walkthrough",
//     thumbnail: "/assets/samples/thumbnail (2).png",
//     createdAt: new Date("2025-04-15"),
//     userImg: "/assets/images/sarah.png",
//     username: "Sarah",
//     views: 245,
//     visibility: "public",
//     duration: 320,
//   },
//   {
//     id: "3",
//     title: "Weekly Team Update",
//     thumbnail: "/assets/samples/thumbnail (3).png",
//     createdAt: new Date("2025-04-22"),
//     userImg: "/assets/images/michael.png",
//     username: "Michael",
//     views: 78,
//     visibility: "private",
//     duration: 412,
//   },
//   {
//     id: "4",
//     title: "Bug Fix Explanation",
//     thumbnail: "/assets/samples/thumbnail (4).png",
//     createdAt: new Date("2025-04-28"),
//     userImg: "/assets/images/emily.png",
//     username: "Emily",
//     views: 32,
//     visibility: "public",
//     duration: 183,
//   },
//   {
//     id: "5",
//     title: "New Feature Overview",
//     thumbnail: "/assets/samples/thumbnail (5).png",
//     createdAt: new Date("2025-05-05"),
//     userImg: "/assets/images/david.png",
//     username: "David",
//     views: 156,
//     visibility: "public",
//     duration: 275,
//   },
//   {
//     id: "6",
//     title: "Client Presentation Feedback",
//     thumbnail: "/assets/samples/thumbnail (6).png",
//     createdAt: new Date("2025-05-10"),
//     userImg: "/assets/images/lisa.png",
//     username: "Lisa",
//     views: 89,
//     visibility: "private",
//     duration: 198,
//   },
//   {
//     id: "7",
//     title: "UI Design Review",
//     thumbnail: "/assets/samples/thumbnail (7).png",
//     createdAt: new Date("2025-05-12"),
//     userImg: "/assets/images/alex.png",
//     username: "Alex",
//     views: 124,
//     visibility: "public",
//     duration: 230,
//   },
//   {
//     id: "8",
//     title: "Marketing Strategy Discussion",
//     thumbnail: "/assets/samples/thumbnail (8).png",
//     createdAt: new Date("2025-05-18"),
//     userImg: "/assets/images/jessica.png",
//     username: "Jessica",
//     views: 67,
//     visibility: "public",
//     duration: 345,
//   }
// ]

export const dummyCards = [
  {
    id: "1",
    title: "SnapChat Messages",
    thumbnail: "/assets/samples/thumbnail (11).jpg",
    createdAt: new Date("2025-05-30"),
    userImg: "/assets/images/ztt.png",
    username: "Zwe Thuta",
    views: 10,
    visibility: "public",
    duration: 156
  },
  {
    id: "2",
    title: "Day in My Life Vlog",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-06-01"),
    userImg: "/assets/images/emily.png",
    username: "Aye Thandar",
    views: 245,
    visibility: "public",
    duration: 480
  },
  {
    id: "3",
    title: "How to Cook Fried Rice",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-06-03"),
    userImg: "/assets/images/jason.png",
    username: "Chef Min",
    views: 830,
    visibility: "unlisted",
    duration: 320
  },
  {
    id: "4",
    title: "Funny Cat Compilation",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-06-05"),
    userImg: "/assets/images/david.png",
    username: "Meme Master",
    views: 1520,
    visibility: "public",
    duration: 212
  },
  {
    id: "5",
    title: "ReactJS Tutorial",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-06-10"),
    userImg: "/assets/images/lisa.png",
    username: "CodeWithSai",
    views: 990,
    visibility: "private",
    duration: 840
  },
  {
    id: "6",
    title: "Myanmar Travel Guide",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-06-12"),
    userImg: "/assets/images/michael.png",
    username: "WanderThar",
    views: 430,
    visibility: "public",
    duration: 675
  },
  {
    id: "7",
    title: "Late Night Study Session",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-06-15"),
    userImg: "/assets/images/sarah.png",
    username: "SmartZin",
    views: 112,
    visibility: "unlisted",
    duration: 390
  },
  {
    id: "8",
    title: "Top 10 Movie Trailers",
    thumbnail: "/assets/samples/thumbnail (9).png",
    createdAt: new Date("2025-06-18"),
    userImg: "/assets/images/alex.png",
    username: "CinemaZaw",
    views: 2100,
    visibility: "public",
    duration: 600
  }
];