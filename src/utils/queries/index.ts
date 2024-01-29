export const FETCH_ALL_MENU_DATA = `
query fetchAllMenuData {
    allMenu(limit: 1) {
      title
      menuGallery {
        asset {
          altText,
          url,
          metadata {
                  dimensions {
                    width
                    height
                  }
          }
        }
      }
      omeleggs {
        name
        price
        description
      }
      eggsetra {
        name
        price
        description
      }
      otherStuff {
        name
        price
        description
      }
    }
    }
`;
