import React from 'react';
import './lowestprice.css';

const LowestPrice = () => {
  return (
    <>
    <div class="lowestpriceContainer">
        <div class="lowestPrice_text">
            <h1>Lowest Prices </h1>
            <h1>Best Quality Shopping</h1>
            <div class="lowestPriceWhay">
                <div class="lowestPriceItem">
                    <div class="lowestPrice_icon">
                        <img src="https://images.meesho.com/images/pow/freeDelivery.svg" />
                    </div>
                    <p>Free Delivery</p>
                </div>

                <div class="lowestPriceItem">
                    <div class="lowestPrice_icon">
                        <img src="https://images.meesho.com/images/pow/cod.svg" />
                    </div>
                    <p>Cash on Delivery</p>
                </div>
                <div class="lowestPriceItem">
                    <div class="lowestPrice_icon">
                        <img src="https://images.meesho.com/images/pow/easyReturns.svg" />
                    </div>
                    <p>Easy Returns</p>
                </div>
            </div>

            <button class="downloadApp_contianer">
                <div class="downloadAppIcon">
                    <img src="https://images.meesho.com/images/pow/playstoreSmallIcon.webp" />
                </div>
                <p>Download the Meesho App</p>
            </button>

        </div>
        <div class="lowestPrice_image">
            <img src="https://images.meesho.com/images/marketing/1631722939962.webp" />
        </div>
    </div>


    {/* <!--Top Categories to choose from--> */}
    <div class="topCategoriesFrom">
        <div class="topCategoriesHeading">
            <span class="horizontalLine"></span>
            <h1>Top Categories to choose from</h1>
            <span class="horizontalLine"></span>
        </div>
        <div class="topCategoreisImage">
            <img src="https://images.meesho.com/images/marketing/1649760442043.webp" />
            <img src="https://images.meesho.com/images/marketing/1649760423313.webp" />
            <img src="https://images.meesho.com/images/marketing/1649759799809.webp" />
        </div>

        <div class="essentialContaienr">
            <img src="https://images.meesho.com/images/marketing/1664368165450.webp" class="essen-btn" />

            <div class="essential_item">
                <img src="https://images.meesho.com/images/marketing/1649760808952.webp" />
                <img src="https://images.meesho.com/images/marketing/1664364866805.webp" />
            </div>

            <div class="essential_item">
                <img src="https://images.meesho.com/images/marketing/1649760703179.webp" />
                <img src="https://images.meesho.com/images/marketing/1664364917657.webp" />
            </div>

            <div class="essential_item">
                <img src="https://images.meesho.com/images/marketing/1649760786763.webp" />
                <img src="https://images.meesho.com/images/marketing/1664364898513.webp" />
            </div>

        </div>


        <div class="becomesellerBanner_Container">
            <img src="https://images.meesho.com/images/pow/downloadBannerDesktop.webp" class="becomesellerBanner" />
            <div class="becomeSeller_Content">
                <div class="becomeSeller_content_content">
                    <h2>Become a Seller and </h2>
                    <h1>Start your Online Business
                        with Zero Investment</h1>
                    <div class=" becomerSeller_appDownload_container">
                        <a href="#" class="becomerSeller_appDownload">
                            <img src="https://images.meesho.com/images/pow/playstoreIcon.webp" />
                        </a>
                        <a href="#" class="becomerSeller_appDownload">
                            <img src="https://images.meesho.com/images/pow/appstoreIcon.webp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="meesho_supper_container">
            <img src="https://images.meesho.com/images/pow/supplyBannerDesktop.webp" />
            <div class="meesho_supper_container_content">
                <div class="meesho_supper_container_content_content">
                    <h1>Register as a Meesho Supplier</h1>
                    <p>Sell your products to crores of customers at 0% commission</p>
                    <div class="meesho-suppliear_benifit_container">
                        <div class="meesho_supper_benifit">
                            <img class="meeesho_benifit_image"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEwLjVDMCA0Ljk4IDQuNDggMC41IDEwIDAuNUMxNS41MiAwLjUgMjAgNC45OCAyMCAxMC41QzIwIDE2LjAyIDE1LjUyIDIwLjUgMTAgMjAuNUM0LjQ4IDIwLjUgMCAxNi4wMiAwIDEwLjVaTTcuMjgyODggMTQuNzkyNUM3LjY3Mjg4IDE1LjE4MjUgOC4zMDI4OCAxNS4xODI1IDguNjkyODggMTQuNzkyNUwxNi4yNzI5IDcuMjAyNUMxNi42NjI5IDYuODEyNSAxNi42NjI5IDYuMTgyNSAxNi4yNzI5IDUuNzkyNUMxNS44ODI5IDUuNDAyNSAxNS4yNTI5IDUuNDAyNSAxNC44NjI5IDUuNzkyNUw3Ljk4Mjg4IDEyLjY3MjVMNS4xMDI4OCA5Ljc5MjVDNC43MTI4OCA5LjQwMjUgNC4wODI4OCA5LjQwMjUgMy42OTI4OCA5Ljc5MjVDMy41MDU2MiA5Ljk3OTMzIDMuNDAwMzkgMTAuMjMzIDMuNDAwMzkgMTAuNDk3NUMzLjQwMDM5IDEwLjc2MiAzLjUwNTYyIDExLjAxNTcgMy42OTI4OCAxMS4yMDI1TDcuMjgyODggMTQuNzkyNVoiIGZpbGw9IiMwNkE3NTkiLz4KPC9zdmc+Cg==" />
                            <p>Grow your business 10x</p>
                        </div>
                        <div class="meesho_supper_benifit">
                            <img class="meeesho_benifit_image"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEwLjVDMCA0Ljk4IDQuNDggMC41IDEwIDAuNUMxNS41MiAwLjUgMjAgNC45OCAyMCAxMC41QzIwIDE2LjAyIDE1LjUyIDIwLjUgMTAgMjAuNUM0LjQ4IDIwLjUgMCAxNi4wMiAwIDEwLjVaTTcuMjgyODggMTQuNzkyNUM3LjY3Mjg4IDE1LjE4MjUgOC4zMDI4OCAxNS4xODI1IDguNjkyODggMTQuNzkyNUwxNi4yNzI5IDcuMjAyNUMxNi42NjI5IDYuODEyNSAxNi42NjI5IDYuMTgyNSAxNi4yNzI5IDUuNzkyNUMxNS44ODI5IDUuNDAyNSAxNS4yNTI5IDUuNDAyNSAxNC44NjI5IDUuNzkyNUw3Ljk4Mjg4IDEyLjY3MjVMNS4xMDI4OCA5Ljc5MjVDNC43MTI4OCA5LjQwMjUgNC4wODI4OCA5LjQwMjUgMy42OTI4OCA5Ljc5MjVDMy41MDU2MiA5Ljk3OTMzIDMuNDAwMzkgMTAuMjMzIDMuNDAwMzkgMTAuNDk3NUMzLjQwMDM5IDEwLjc2MiAzLjUwNTYyIDExLjAxNTcgMy42OTI4OCAxMS4yMDI1TDcuMjgyODggMTQuNzkyNVoiIGZpbGw9IiMwNkE3NTkiLz4KPC9zdmc+Cg==" />
                            <p>Enjoy 100% Profit</p>
                        </div>
                        <div class="meesho_supper_benifit">
                            <img class="meeesho_benifit_image"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEwLjVDMCA0Ljk4IDQuNDggMC41IDEwIDAuNUMxNS41MiAwLjUgMjAgNC45OCAyMCAxMC41QzIwIDE2LjAyIDE1LjUyIDIwLjUgMTAgMjAuNUM0LjQ4IDIwLjUgMCAxNi4wMiAwIDEwLjVaTTcuMjgyODggMTQuNzkyNUM3LjY3Mjg4IDE1LjE4MjUgOC4zMDI4OCAxNS4xODI1IDguNjkyODggMTQuNzkyNUwxNi4yNzI5IDcuMjAyNUMxNi42NjI5IDYuODEyNSAxNi42NjI5IDYuMTgyNSAxNi4yNzI5IDUuNzkyNUMxNS44ODI5IDUuNDAyNSAxNS4yNTI5IDUuNDAyNSAxNC44NjI5IDUuNzkyNUw3Ljk4Mjg4IDEyLjY3MjVMNS4xMDI4OCA5Ljc5MjVDNC43MTI4OCA5LjQwMjUgNC4wODI4OCA5LjQwMjUgMy42OTI4OCA5Ljc5MjVDMy41MDU2MiA5Ljk3OTMzIDMuNDAwMzkgMTAuMjMzIDMuNDAwMzkgMTAuNDk3NUMzLjQwMDM5IDEwLjc2MiAzLjUwNTYyIDExLjAxNTcgMy42OTI4OCAxMS4yMDI1TDcuMjgyODggMTQuNzkyNVoiIGZpbGw9IiMwNkE3NTkiLz4KPC9zdmc+Cg==" />
                            <p>Sell all over India</p>
                        </div>
                    </div>
                    <a href="#" class="signup_btn_now">Sign up now</a>
                </div>
            </div>
        </div>

    </div>
    </>

  )
}

export default LowestPrice
