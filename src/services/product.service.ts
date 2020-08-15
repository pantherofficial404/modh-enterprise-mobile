class ProductService {
  public getProducts() {
    return [
      {
        disabled: false,
        _id: '5f284e4c1c91fd572d83602e',
        productId: '41869e11-7988-49e2-b289-de1382b699c4',
        category: 'PULSES',
        description: 'Moong Dal (Yellow)',
        variants: [
          {
            weightUnit: 'KG',
            isOutOfStock: false,
            _id: '5f284e4c1c91fd572d83602f',
            barcode: '12',
            productId: '41869e11-7988-49e2-b289-de1382b699c4',
            originalPrice: 1,
            price: 10,
            title: 'Moong Dal(500gm)',
            uuid: 'fa09bf43-b0ae-4392-8a4b-742a8eabd9b5',
            weight: 100,
          },
          {
            weightUnit: 'KG',
            isOutOfStock: false,
            _id: '5f284e4c1c91fd572d836030',
            barcode: '12',
            productId: '41869e11-7988-49e2-b289-de1382b699c4',
            originalPrice: 1,
            price: 10,
            title: 'Moong Dal(1KG)',
            uuid: '48e7d6a2-002c-4e43-86d2-dda4806a8eaf',
            weight: 100,
          },
        ],
        title: 'Moong Dal (Yellow)',
        vendor: 'Dipak kirana store',
        originOfProduct: 'MADE IN INDIA',
        images: [
          {
            mediaType: 'IMAGE',
            variantIds: [
              'fa09bf43-b0ae-4392-8a4b-742a8eabd9b5',
              '48e7d6a2-002c-4e43-86d2-dda4806a8eaf',
            ],
            _id: '5f284e4c1c91fd572d836031',
            src:
              'https://images-na.ssl-images-amazon.com/images/I/71bCemMa7EL._SL1300_.jpg',
            productId: '41869e11-7988-49e2-b289-de1382b699c4',
            uuid: 'cf0bb154-566a-479a-bd40-b97391797b22',
          },
        ],
        thumbnailImage:
          'https://images-na.ssl-images-amazon.com/images/I/71bCemMa7EL._SL1300_.jpg',
        createdAt: '2020-08-03T17:50:04.655Z',
        updatedAt: '2020-08-03T17:50:04.655Z',
        __v: 0,
      },
      {
        disabled: false,
        _id: '5f284eadcfaa38576b52f696',
        productId: 'b4ce2f5f-4e4f-46ec-9767-a71430de507f',
        category: 'PULSES',
        description: 'Moong Dal (Yellow)',
        variants: [
          {
            weightUnit: 'KG',
            isOutOfStock: false,
            _id: '5f284eadcfaa38576b52f697',
            barcode: '12',
            productId: 'b4ce2f5f-4e4f-46ec-9767-a71430de507f',
            originalPrice: 110,
            price: 100,
            title: 'Moong Dal(500gm)',
            uuid: '6aaf7f50-681c-471a-830b-b803502f9c4e',
            weight: 100,
          },
          {
            weightUnit: 'KG',
            isOutOfStock: false,
            _id: '5f284eadcfaa38576b52f698',
            barcode: '12',
            productId: 'b4ce2f5f-4e4f-46ec-9767-a71430de507f',
            originalPrice: 11,
            price: 100,
            title: 'Moong Dal(1KG)',
            uuid: '3f770cf5-ee13-423f-8ca8-a9a980452160',
            weight: 100,
          },
        ],
        title: 'Moong Dal (Yellow)',
        vendor: 'Dipak kirana store',
        originOfProduct: 'MADE IN INDIA',
        images: [
          {
            mediaType: 'IMAGE',
            variantIds: [
              '6aaf7f50-681c-471a-830b-b803502f9c4e',
              '3f770cf5-ee13-423f-8ca8-a9a980452160',
            ],
            _id: '5f284eadcfaa38576b52f699',
            src:
              'https://images-na.ssl-images-amazon.com/images/I/71bCemMa7EL._SL1300_.jpg',
            productId: 'b4ce2f5f-4e4f-46ec-9767-a71430de507f',
            uuid: '3ae5ea95-c33f-468d-b6d8-62533474d151',
          },
        ],
        thumbnailImage:
          'https://images-na.ssl-images-amazon.com/images/I/71bCemMa7EL._SL1300_.jpg',
        createdAt: '2020-08-03T17:51:41.734Z',
        updatedAt: '2020-08-03T17:51:41.734Z',
        __v: 0,
      },
    ];
  }
}

export default new ProductService();
