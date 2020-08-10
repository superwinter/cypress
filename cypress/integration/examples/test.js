it('Perform login', () ⇒ {
  // Visit ExecuteAutomation Website     
  cy.visit('http://eaapp.somee.com/')
  // 點 navigation 的 Login
  cy.contains('Login').click()
  // url 要有 'Login 這個字'，確定進入 login page
  cy.url().should('include', 'Login')
  // 輸入使用者名稱 "admin"   
  cy.get('#UserName').type("admin")
  // 輸入密碼 "password"
  cy.get("#Password").type('password')
  // 按下送出按鈕
  cy.get('.btn').click() 
}
