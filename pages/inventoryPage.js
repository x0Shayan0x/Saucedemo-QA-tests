class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = '.title';
    this.firstAddToCart = '.inventory_item button';
    this.cartBadge = '.shopping_cart_badge';
  }

  async getTitle() {
    return this.page.textContent(this.title);
  }

  async addFirstItemToCart() {
    await this.page.click(this.firstAddToCart);
  }

  async getCartCount() {
    return this.page.textContent(this.cartBadge);
  }
}

module.exports = { InventoryPage };